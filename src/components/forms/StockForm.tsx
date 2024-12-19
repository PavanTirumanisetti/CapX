import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Stock } from '../../types';
import { StockFormField } from './StockFormField';

interface StockFormProps {
  stock?: Stock;
  onSubmit: (stock: Omit<Stock, 'id' | 'currentPrice'>) => void;
  onClose: () => void;
}

export function StockForm({ stock, onSubmit, onClose }: StockFormProps) {
  const [formData, setFormData] = useState({
    symbol: '',
    name: '',
    quantity: 1,
    buyPrice: 0,
  });

  useEffect(() => {
    if (stock) {
      setFormData({
        symbol: stock.symbol,
        name: stock.name,
        quantity: stock.quantity,
        buyPrice: stock.buyPrice,
      });
    }
  }, [stock]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {stock ? 'Edit Stock' : 'Add Stock'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <StockFormField
              label="Symbol"
              type="text"
              value={formData.symbol}
              onChange={(value) => setFormData({ ...formData, symbol: value })}
            />
            <StockFormField
              label="Name"
              type="text"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
            />
            <StockFormField
              label="Quantity"
              type="number"
              value={formData.quantity}
              onChange={(value) => setFormData({ ...formData, quantity: Number(value) })}
              min={1}
            />
            <StockFormField
              label="Buy Price"
              type="number"
              value={formData.buyPrice}
              onChange={(value) => setFormData({ ...formData, buyPrice: Number(value) })}
              min={0}
              step={0.01}
            />
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {stock ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}