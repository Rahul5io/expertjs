import React from 'react';
import {accountsData} from '../storage/chartAccountsData';

const ChartOfAccounts = () => {


  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Chart of Accounts</h1>
        <div className="flex space-x-2">
       
          <button className="bg-blue-500 hover:bg-green-600 text-white px-3 py-1 rounded">Print PDF</button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">Import</button>
          <button className="bg-orange-500 hover:bg-green-600 text-white px-3 py-1 rounded">Export</button>
        </div>
      </div>
      {/* ... other button groups and search input ... */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-slate-500">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">YTD</th>
            </tr>
          </thead>
          <tbody>
            {accountsData.map((account, index) => (
              <tr key={index} className="border-b border-collapse border border-slate-300">
                <td className="px-4 py-2 border-collapse border border-slate-300" >
                  <div className="flex items-center   ">
                    <input type="checkbox" id={`account-${account.code}`} />
                    {/* Icon can be placed here */}
                    <label htmlFor={`account-${account.code}`} className="ml-2">{account.code}</label>
                  </div>
                </td>
                <td className="px-4 py-2 border-collapse border border-slate-300">{account.name}</td>
                <td className="px-4 py-2 border-collapse border border-slate-300" >{account.description}</td>
                <td className="px-4 py-2 border-collapse border border-slate-300">{account.type}</td>
                <td className="px-4 py-2 border-collapse border border-slate-300">{account.ytd.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChartOfAccounts;
