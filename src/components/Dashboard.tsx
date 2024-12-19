import React from 'react';
import { BarChart3, TrendingUp, TrendingDown } from 'lucide-react';
import { Stock, PortfolioMetrics } from '../types';

interface DashboardProps {
  stocks: Stock[];
  metrics: PortfolioMetrics;
}

export function Dashboard({ stocks, metrics }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-500 text-sm font-medium">Total Value</h3>
          <BarChart3 className="h-5 w-5 text-blue-500" />
        </div>
        <p className="mt-2 text-3xl font-bold text-gray-900">
          ${metrics.totalValue.toFixed(2)}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-500 text-sm font-medium">Total Gain/Loss</h3>
          {metrics.totalGainLoss >= 0 ? (
            <TrendingUp className="h-5 w-5 text-green-500" />
          ) : (
            <TrendingDown className="h-5 w-5 text-red-500" />
          )}
        </div>
        <p className={`mt-2 text-3xl font-bold ${
          metrics.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          ${Math.abs(metrics.totalGainLoss).toFixed(2)}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-500 text-sm font-medium">Top Performer</h3>
          <TrendingUp className="h-5 w-5 text-green-500" />
        </div>
        {metrics.topPerformer ? (
          <>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              {metrics.topPerformer.symbol}
            </p>
            <p className="text-sm text-gray-500">
              ${metrics.topPerformer.currentPrice.toFixed(2)}
            </p>
          </>
        ) : (
          <p className="mt-2 text-gray-500">No stocks</p>
        )}
      </div>
    </div>
  );
}