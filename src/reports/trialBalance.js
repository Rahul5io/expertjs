import React from "react";
import '../styles/trialBalance.css';
import { Link } from 'react-router-dom';

export default function TrialBalance() {

    // Sample data as an array of objects
    const accountsName = [
        { description: 'Cash and cash equivalents', debit: 172.89, credit: 0.00 },
        { description: 'Cash on hand', debit: 390.86, credit: 0.00 },
        { description: 'Trade and other receivables', debit: 100, credit: 0.00 },
    ];

    // Calculate total values
    const totalDebit = accountsName.reduce((total, item) => total + item.debit, 0);
    const totalCredit = accountsName.reduce((total, item) => total + item.credit, 0);

    return (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-md">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
               
                    <span className="text-sm font-medium">
                        <Link to="/reports">
                            <button className="trial-balance-button">Back to report list</button>
                        </Link>
                    </span>
                </div>

            </div>
            <div className="text-4xl font-bold  text-gray-800 "
            >Trial Balance</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                    {/* Replace Select component */}
                    <select id="report-period">
                        <option value="custom">Custom</option>
                    </select>
                    {/* Replace Input components */}
                    <input placeholder="01.10.2020" type="date" />
                    <span className="text-sm">to</span>
                    <input placeholder="31.03.2022" type="date" />
                </div>
                <div className="flex items-center space-x-2">

                    <div className="flex items-center space-x-1">

                        {/* Replace Button component */}
                        <button
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Run report</button>
                    </div>
                </div>
            </div>
            <div className="mb-10">

            </div>

            <div className="mb-4">
                {/* Table component */}
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-right">DEBIT</th>
                            <th className="text-right">CREDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Use map to iterate over the data array and generate table rows */}
                        {accountsName.map((item, index) => (
                            <tr key={index}>
                                <td>{item.description}</td>
                                <td className="text-right">{item.debit}</td>
                                <td className="text-right">{item.credit}</td>
                            </tr>
                        ))}
                        {/* Add total row */}
                        <tr>
                            <td className="text-right font-semibold">Total</td>
                            <td className="text-right font-semibold">{totalDebit.toFixed(2)}</td>
                            <td className="text-right font-semibold">{totalCredit.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}
