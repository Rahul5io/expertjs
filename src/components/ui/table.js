// File: components/ui/table.js
import React from 'react';

export const Table = ({ children }) => {
  return <table className="min-w-full divide-y divide-gray-200">{children}</table>;
};

export const TableHeader = ({ children }) => {
  return <thead className="bg-gray-50">{children}</thead>;
};

export const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

export const TableHead = ({ children, className }) => {
  return <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${className}`}>{children}</th>;
};

export const TableCell = ({ children, className }) => {
  return <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>;
};

export const TableBody = ({ children }) => {
  return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
};
