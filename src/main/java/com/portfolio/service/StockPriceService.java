package com.portfolio.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.math.BigDecimal;

@Service
public class StockPriceService {
    @Value("${stock.api.key}")
    private String apiKey;

    @Value("${stock.api.base-url}")
    private String baseUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public BigDecimal getCurrentPrice(String symbol) {
        String url = String.format("%s/quote?symbol=%s&token=%s", baseUrl, symbol, apiKey);
        QuoteResponse response = restTemplate.getForObject(url, QuoteResponse.class);
        return BigDecimal.valueOf(response.getCurrentPrice());
    }

    private static class QuoteResponse {
        private double c; // Current price

        public double getCurrentPrice() {
            return c;
        }

        public void setC(double c) {
            this.c = c;
        }
    }
}