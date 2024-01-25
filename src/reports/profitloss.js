import React from "react";

export default function ProfitLoss() {
  // Sample data as an array of objects
  const data = [
    {
      category: "Income",
      items: [
        { description: "Sales", amount: 41204.0 },
        { description: "Sales of Product Income", amount: 1026.0 }
      ]
    },
    {
      category: "Cost of Sales",
      items: [
        { description: "Cost of sales", amount: 0.0 },
        { description: "Inventory Shrinkage", amount: 0.0 }
      ]
    },
    {
      category: "Expenses",
      items: [
        { description: "Travel expenses - general and admin expenses", amount: 37847.94 }
      ]
    },
    {
      category: "Other Expenses",
      items: [
        { description: "Other Expense", amount: 567.89 }
      ]
    }
  ];

  // Calculate totals
  const totalIncome = data[0].items.reduce((total, item) => total + item.amount, 0);
  const totalCostOfSales = data[1].items.reduce((total, item) => total + item.amount, 0);
  const grossProfit = totalIncome - totalCostOfSales;
  const totalExpenses = data[2].items.reduce((total, item) => total + item.amount, 0);
  const totalOtherExpenses = data[3].items.reduce((total, item) => total + item.amount, 0);
  const netProfit = grossProfit - totalExpenses - totalOtherExpenses;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-semibold text-center">Craig's Landscaping Services</h1>
      <h2 className="text-xl text-center mt-2">PROFIT AND LOSS</h2>
      <p className="text-center mb-6">January - June, 2020</p>
      <div className="border-t border-b border-gray-300 py-4">
        <div className="flex justify-between border-b border-gray-200">
          <span className="font-bold"></span>
          <span className="font-bold">Amount</span>
        </div>
        {data.map((category, index) => (
          <div key={index} className="mt-4 border-b border-gray-200">
            <h3 className="font-bold">{category.category}</h3>
            <div className="ml-4">
              {category.items.map((item, subIndex) => (
                <div key={subIndex} className="flex justify-between border-b border-gray-200">
                  {/* Adjust margin-right for description and margin-left for amount */}
                  <span className="mr-2">{item.description}</span>
                  <span className="ml-2">{item.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold mt-2 border-b border-gray-200">
              <span>Total {category.category}</span>
              <span>{category.items.reduce((total, item) => total + item.amount, 0).toFixed(2)}</span>
            </div>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4 border-b border-gray-200">
          <span>GROSS PROFIT</span>
          <span>{grossProfit.toFixed(2)}</span>
        </div>
        <div className="mt-4 border-b border-gray-200">
          <h3 className="font-bold">Net Profit</h3>
          <div className="ml-4">
            <div className="flex justify-between font-bold mt-2 border-b border-gray-200">
              <span>Total Expenses</span>
              <span>{totalExpenses.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200">
              <span>Total Other Expenses</span>
              <span>{totalOtherExpenses.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between font-bold mt-2 border-b border-gray-200">
            <span>Net Profit</span>
            <span>{netProfit.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
