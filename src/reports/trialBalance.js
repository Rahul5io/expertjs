import React, {useRef} from "react";
import '../styles/trialBalance.css';
import { Link } from 'react-router-dom';
import { PlTbSearch, BsReportSearch } from '../components/ui/reportSearch';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { DownloadTableExcel,useDownloadExcel } from 'react-export-table-to-excel';

export default function TrialBalance() {

    const tableRef = useRef(null);

    // Sample data as an array of objects
    const accountsName = [
        { description: 'Cash and cash equivalents', debit: 172.89, credit: 0.00 },
        { description: 'Cash on hand', debit: 390.86, credit: 0.00 },
        { description: 'Trade and other receivables', debit: 100, credit: 0.00 },
    ];

    // Calculate total values
    const totalDebit = accountsName.reduce((total, item) => total + item.debit, 0);
    const totalCredit = accountsName.reduce((total, item) => total + item.credit, 0);

    //TO EXPORT EXCEL
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

    return (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-md">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">
                      
                        <button onClick={onDownload}> Export excel </button>
                      
                    </span>
                </div>
                <div>
               
                </div>
            </div>
            <div className="text-4xl font-bold text-gray-800">Trial Balance</div>
            <div className="mb-10">
                <PlTbSearch />
            </div>
            <div className="mb-4">
                {/* Table component */}
                <table className="table"  ref={tableRef}>
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
