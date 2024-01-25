import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { accountsData } from '../storage/chartAccountsData';

export default function ManualJournal() {

    const journalItems = { description: '', accounting_Code: 1200, tax_Rate: 0, debit: 0, credit: 0 };

    const [journalData, setJournalData] = useState({
        jornal_date: '',
        dueDate: '',
        contact: '',
        jornalNo: '',
        narration: '',
        items: [journalItems, journalItems],
        subTotal: 0,
        taxTotal: 0,
        total: 0,
    });



    useEffect(() => {

        const today = new Date().toISOString().split('T')[0];

        setJournalData(prevData => ({
            ...prevData,
            jornal_date: today,
        }));

    }, []);

    function toTitleCase(str) {
        return str
            .toLowerCase()
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Inside your component
    const codeSelection = accountsData.map(account => ({
        value: account.code,
        label: `${account.code}-${account.name}`
    }));

    // Add a new item row to the invoice
    const handleAddItem = () => {
        setJournalData(prevData => {
            const updatedItems = [...prevData.items, { ...journalItems }];
            return {
                ...prevData,
                items: updatedItems,
            };
        });

        // Logging here might not reflect the update immediately
        console.log("Added new line item");
    };


    //set new data from input to their variables
    const handleInputChange = (index, fieldName, value) => {
        const newItems = [...journalData.items];
    
        // If the index is out of bounds, it means we're dealing with a new item
        if (index >= newItems.length) {
          newItems.push({ description: '', accounting_Code: '', tax_Rate: 0, debit: 0, credit: 0 });
        }
    
        newItems[index] = { ...newItems[index], [fieldName]: value };
    
        // Update the state
        setJournalData((prevData) => ({
          ...prevData,
          items: newItems,
          subTotal: calculateTotal(newItems, 'debit'),
          total: calculateTotal(newItems, 'credit'),
        }));
      };
    

    const calculateTotal = (items, name) => {
        if (name==="debit") {
            return items.reduce((total, item) => total + parseFloat(item.debit || 0), 0);
        } else{
            return items.reduce((total, item) => total + parseFloat(item.credit || 0), 0);
        }
    };

    useEffect(() => {
        console.log("journal data changed", journalData)
    }, [journalData])

    return (
        <div className="max-w-6xl mx-auto my-8 p-4 bg-white shadow rounded">
            <h1 className="text-xl font-semibold mb-4">Draft</h1>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block mb-1 font-medium" htmlFor="narration">
                        Narration
                    </label>
                    <input type="text" id="narration" className="form-input border" placeholder="" />
                </div>
                <div>
                    <label className="block mb-1 font-medium" htmlFor="date">
                        Date
                    </label>
                    <input className="border-gray-300 rounded-lg p-2"
                        type="date"
                        name="journalDate"
                        defaultValue={journalData.jornal_date}

                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium" htmlFor="autoReversingDate">
                        Auto Reversing Date (optional)
                    </label>
                    <select id="autoReversingDate" className="form-select">
                        {/* Options go here */}
                    </select>
                </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
                <input type="checkbox" id="defaultNarration" className="form-checkbox" />
                <label className="flex-grow text-sm font-medium leading-none" htmlFor="defaultNarration">
                    Default narration to journal line description
                </label>
                <input type="checkbox" id="cashBasisReports" className="form-checkbox" />
                <label className="flex-grow text-sm font-medium leading-none" htmlFor="cashBasisReports">
                    Show journal on cash basis reports
                </label>
                <CircleIcon className="text-blue-500" />
            </div>
            <div className="mb-4">
                <select id="amountsAre" className="form-select">
                    {/* Options go here */}
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {journalData.items.length > 0 && Object.keys(journalData.items[0]).map((key, index) => (
                                <th key={index} className="  w-1/4">
                                    {toTitleCase(key)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white  table-fixed divide-y divide-gray-200">
                        {journalData.items.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap w-1/4">
                                    <input className="border-gray-300 rounded-lg p-2 "
                                        type="text"
                                        name="description"
                                        onChange={(e) => handleInputChange(index, "description", e.target.value)}
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-1/4">

                                    <Select
                                        options={codeSelection}
                                        className="border-gray-300 rounded-lg "
                                        name="accountingCode"
                                        placeholder="Select Account"
                                        onChange={(selectedOption) => handleInputChange(index, "accounting_Code", selectedOption.value)}
                                    />

                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-1/4">
                                    <input className="border-gray-300 rounded-lg p-2"
                                        type="number"
                                        name="taxRate"
                                        value={item.tax_Rate}
                                        onChange={(e) => handleInputChange(index, "tax_Rate", e.target.value)}

                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-1/4">
                                    <input className="border-gray-300 rounded-lg p-2"
                                        type="text"
                                        name="debit"
                                        value={item.debit}

                                        onChange={(e) => handleInputChange(index, "debit", e.target.value)}

                                    />
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap w-1/4">
                                    <input className="border-gray-300 rounded-lg p-2"
                                        type="number"
                                        name="credit"
                                        value={item.credit}
                                        onChange={(e) => handleInputChange(index, "credit", e.target.value)}
                                    />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleAddItem}
                >
                    Add items
                </button>
                <div className="space-x-4">
                    <span className="font-medium">Subtotal</span>
                    <span>{journalData.subTotal}</span>

                </div>
            </div>
            <div className="flex justify-end items-center mt-4">
                <div className="space-x-4">
                    <span className="font-bold">Tax</span>
                    <span>0.00</span>

                </div>
            </div>

            <div className="flex justify-end items-center mt-4">
                <div className="space-x-4">
                    <span className="font-bold">Total</span>
                    <span>{journalData.total}</span>

                </div>
            </div>

            <div className="flex justify-end items-center space-x-4 mt-8">

                <button className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Post
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded">
                    Cancel
                </button>
            </div>
        </div>
    )
}

function CircleIcon(props) {
    // ... same as before
}

function XIcon(props) {
    // ... same as before
}


