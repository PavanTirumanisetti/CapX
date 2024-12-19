package com.portfolio.controller;

import com.portfolio.dto.StockDTO;
import com.portfolio.service.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class StockController {
    private final StockService stockService;

    @GetMapping
    public ResponseEntity<List<StockDTO>> getAllStocks(@RequestParam Long portfolioId) {
        return ResponseEntity.ok(stockService.getAllStocks(portfolioId));
    }

    @PostMapping
    public ResponseEntity<StockDTO> addStock(@RequestBody StockDTO stockDTO) {
        return ResponseEntity.ok(stockService.addStock(stockDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<StockDTO> updateStock(@PathVariable Long id, @RequestBody StockDTO stockDTO) {
        return ResponseEntity.ok(stockService.updateStock(id, stockDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
        return ResponseEntity.noContent().build();
    }
}