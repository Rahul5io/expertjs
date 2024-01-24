import React from 'react';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow dark:bg-gray-900">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 text-green-500 dark:text-green-300">
            $
          </div>
          <h1 className="text-2xl font-semibold">Acme Finance</h1>
        </div>
        <nav className="space-x-4">
          <div className="hover:underline">
            Summary
          </div>
          <div className="hover:underline">
            Transactions
          </div>
          <div className="hover:underline">
            Contact
          </div>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="space-y-4" id="summary">
          <h2 className="text-xl font-semibold">Financial Summary</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col p-4 rounded-lg shadow-sm bg-white dark:bg-gray-900">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Total Revenue
              </div>
              <div className="text-lg font-bold">$12,345.67</div>
            </div>
            <div className="flex flex-col p-4 rounded-lg shadow-sm bg-white dark:bg-gray-900">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Total Expenses
              </div>
              <div className="text-lg font-bold">$6,789.01</div>
            </div>
            <div className="flex flex-col p-4 rounded-lg shadow-sm bg-white dark:bg-gray-900">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Net Income
              </div>
              <div className="text-lg font-bold">$5,556.66</div>
            </div>
          </div>
        </section>
        <section className="mt-12 space-y-4" id="transactions">
          <h2 className="text-xl font-semibold">Transaction Details</h2>
          <div className="border rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">01/01/2024</td>
                  <td className="px-4 py-2">Office Supplies</td>
                  <td className="px-4 py-2">Expenses</td>
                  <td className="px-4 py-2">$123.45</td>
                  <td className="px-4 py-2">$12,222.22</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">01/02/2024</td>
                  <td className="px-4 py-2">Web Hosting</td>
                  <td className="px-4 py-2">Expenses</td>
                  <td className="px-4 py-2">$67.89</td>
                  <td className="px-4 py-2">$12,154.33</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">01/03/2024</td>
                  <td className="px-4 py-2">Client Invoice</td>
                  <td className="px-4 py-2">Revenue</td>
                  <td className="px-4 py-2">$1,234.56</td>
                  <td className="px-4 py-2">$13,388.89</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    
    </div>
  );
}

export default Dashboard;