import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Stock } from './types';
import { usePortfolioMetrics } from './hooks/usePortfolioMetrics';
import { Dashboard } from './components/dashboard/Dashboard';
import { StockList } from './components/stocks/StockList';
import { StockForm } from './components/forms/StockForm';
import { MOCK_STOCKS } from './services/mockData';

function App() {
  const [stocks, setStocks] = useState<Stock[]>(MOCK_STOCKS);
  const [showForm, setShowForm] = useState(false);
  const [editingStock, setEditingStock] = useState<Stock | undefined>();
  
  const metrics = usePortfolioMetrics(stocks);

  const handleSubmit = (stockData: Omit<Stock, 'id' | 'currentPrice'>) => {
    if (editingStock) {
      setStocks(
        stocks.map((stock) =>
          stock.id === editingStock.id
            ? {
                ...stock,
                ...stockData,
              }
            : stock
        )
      );
    } else {
      const newStock: Stock = {
        id: Date.now().toString(),
        currentPrice: stockData.buyPrice * 1.1, // Mock current price
        ...stockData,
      };
      setStocks([...stocks, newStock]);
    }
    setEditingStock(undefined);
    setShowForm(false);
  };

  const handleEdit = (stock: Stock) => {
    setEditingStock(stock);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Tracker</h1>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Stock
          </button>
        </div>

        <Dashboard stocks={stocks} metrics={metrics} />
        <StockList
          stocks={stocks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {showForm && (
          <StockForm
            stock={editingStock}
            onSubmit={handleSubmit}
            onClose={() => {
              setShowForm(false);
              setEditingStock(undefined);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;