package com.portfolio.service;

import com.portfolio.dto.StockDTO;
import com.portfolio.model.Stock;
import com.portfolio.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StockService {
    private final StockRepository stockRepository;
    private final StockPriceService stockPriceService;

    @Transactional(readOnly = true)
    public List<StockDTO> getAllStocks(Long portfolioId) {
        return stockRepository.findByPortfolioId(portfolioId).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    @Transactional
    public StockDTO addStock(StockDTO stockDTO) {
        Stock stock = convertToEntity(stockDTO);
        stock.setCurrentPrice(stockPriceService.getCurrentPrice(stock.getSymbol()));
        Stock savedStock = stockRepository.save(stock);
        return convertToDTO(savedStock);
    }

    @Transactional
    public StockDTO updateStock(Long id, StockDTO stockDTO) {
        Stock stock = stockRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Stock not found"));
        
        updateStockFromDTO(stock, stockDTO);
        stock.setCurrentPrice(stockPriceService.getCurrentPrice(stock.getSymbol()));
        Stock updatedStock = stockRepository.save(stock);
        return convertToDTO(updatedStock);
    }

    @Transactional
    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    private StockDTO convertToDTO(Stock stock) {
        StockDTO dto = new StockDTO();
        dto.setId(stock.getId());
        dto.setSymbol(stock.getSymbol());
        dto.setName(stock.getName());
        dto.setQuantity(stock.getQuantity());
        dto.setBuyPrice(stock.getBuyPrice());
        dto.setCurrentPrice(stock.getCurrentPrice());
        return dto;
    }

    private Stock convertToEntity(StockDTO dto) {
        Stock stock = new Stock();
        stock.setSymbol(dto.getSymbol());
        stock.setName(dto.getName());
        stock.setQuantity(dto.getQuantity());
        stock.setBuyPrice(dto.getBuyPrice());
        return stock;
    }

    private void updateStockFromDTO(Stock stock, StockDTO dto) {
        stock.setSymbol(dto.getSymbol());
        stock.setName(dto.getName());
        stock.setQuantity(dto.getQuantity());
        stock.setBuyPrice(dto.getBuyPrice());
    }
}