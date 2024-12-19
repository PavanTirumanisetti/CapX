import { Stock } from '../types';

export const calculateStockGainLoss = (stock: Stock): number => {
  return (stock.currentPrice - stock.buyPrice) * stock.quantity;
};

export const calculateTotalValue = (stocks: Stock[]): number => {
  return stocks.reduce(
    (sum, stock) => sum + stock.currentPrice * stock.quantity,
    0
  );
};

export const calculateTotalGainLoss = (stocks: Stock[]): number => {
  return stocks.reduce(
    (sum, stock) => sum + calculateStockGainLoss(stock),
    0
  );
};

export const findTopPerformer = (stocks: Stock[]): Stock | null => {
  if (!stocks.length) return null;
  return stocks.reduce((top, current) => {
    const topPerformance = (top.currentPrice - top.buyPrice) / top.buyPrice;
    const currentPerformance = (current.currentPrice - current.buyPrice) / current.buyPrice;
    return currentPerformance > topPerformance ? current : top;
  });
};

export const findWorstPerformer = (stocks: Stock[]): Stock | null => {
  if (!stocks.length) return null;
  return stocks.reduce((worst, current) => {
    const worstPerformance = (worst.currentPrice - worst.buyPrice) / worst.buyPrice;
    const currentPerformance = (current.currentPrice - current.buyPrice) / current.buyPrice;
    return currentPerformance < worstPerformance ? current : worst;
  });
};