import { useState, useEffect } from 'react';
import { Stock, PortfolioMetrics } from '../types';
import {
  calculateTotalValue,
  calculateTotalGainLoss,
  findTopPerformer,
  findWorstPerformer,
} from '../utils/calculations';

export const usePortfolioMetrics = (stocks: Stock[]) => {
  const [metrics, setMetrics] = useState<PortfolioMetrics>({
    totalValue: 0,
    totalGainLoss: 0,
    topPerformer: null,
    worstPerformer: null,
  });

  useEffect(() => {
    setMetrics({
      totalValue: calculateTotalValue(stocks),
      totalGainLoss: calculateTotalGainLoss(stocks),
      topPerformer: findTopPerformer(stocks),
      worstPerformer: findWorstPerformer(stocks),
    });
  }, [stocks]);

  return metrics;
};