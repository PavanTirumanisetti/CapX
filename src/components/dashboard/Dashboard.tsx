import React from 'react';
import { BarChart3, TrendingUp, TrendingDown } from 'lucide-react';
import { Stock, PortfolioMetrics } from '../../types';
import { MetricCard } from './MetricCard';
import { formatCurrency } from '../../utils/formatters';

interface DashboardProps {
  stocks: Stock[];
  metrics: PortfolioMetrics;
}

export function Dashboard({ metrics }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <MetricCard
        title="Total Value"
        value={formatCurrency(metrics.totalValue)}
        Icon={BarChart3}
        iconColor="text-blue-500"
      />

      <MetricCard
        title="Total Gain/Loss"
        value={formatCurrency(Math.abs(metrics.totalGainLoss))}
        Icon={metrics.totalGainLoss >= 0 ? TrendingUp : TrendingDown}
        iconColor={metrics.totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'}
      />

      <MetricCard
        title="Top Performer"
        value={metrics.topPerformer?.symbol || 'No stocks'}
        Icon={TrendingUp}
        iconColor="text-green-500"
        subtitle={metrics.topPerformer ? formatCurrency(metrics.topPerformer.currentPrice) : undefined}
      />
    </div>
  );
}