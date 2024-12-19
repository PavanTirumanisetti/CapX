package com.portfolio.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class StockDTO {
    private Long id;
    private String symbol;
    private String name;
    private Integer quantity;
    private BigDecimal buyPrice;
    private BigDecimal currentPrice;
}