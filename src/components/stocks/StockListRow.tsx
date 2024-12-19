import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Stock } from '../../types';
import { calculateStockGainLoss } from '../../utils/calculations';
import { formatCurrency } from '../../utils/formatters';

interface StockListRowProps {
  stock: Stock;
  onEdit: (stock: Stock) => void;
  onDelete: (id: string) => void;
}

export function StockListRow({ stock, onEdit, onDelete }: StockListRowProps) {
  const gainLoss = calculateStockGainLoss(stock);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {stock.symbol}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {stock.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {stock.quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatCurrency(stock.buyPrice)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatCurrency(stock.currentPrice)}
      </td>
      <td className={`px-6 py-4 whitespace-nowrap text-sm ${
        gainLoss >= 0 ? 'text-green-600' : 'text-red-600'
      }`}>
        {formatCurrency(gainLoss)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onEdit(stock)}
          className="text-indigo-600 hover:text-indigo-900 mr-4"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          onClick={() => onDelete(stock.id)}
          className="text-red-600 hover:text-red-900"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}