import React from 'react';

interface StockFormFieldProps {
  label: string;
  type: 'text' | 'number';
  value: string | number;
  onChange: (value: string) => void;
  min?: number;
  step?: number;
  required?: boolean;
}

export function StockFormField({
  label,
  type,
  value,
  onChange,
  min,
  step,
  required = true,
}: StockFormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        min={min}
        step={step}
        required={required}
      />
    </div>
  );
}