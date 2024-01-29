import React, { useState, useEffect } from 'react';
import { accountsData } from '../storage/chartAccountsData';
import Select from 'react-select';
import EntryTable from '../components/invoiceJournal/Entrytable';



export default function Invoice() {
  // State for invoice data
  const lineItems = { description: '', qty: 1, unitPrice: 0, accountingCode: 'sales', amount: 0 };

  const [invoiceData, setInvoiceData] = useState({
    invoiceDate: '',
    dueDate: '',
    contact: '',
    invoiceNo: '',
    reference: '',
    items: [lineItems,],
    subTotal: 0,
    taxTotal: 0,
    total: 0,
  });

  // Handle line item changes
  const handleItemChange = (index, e) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][e.target.name] = e.target.value;
    setInvoiceData({
      ...invoiceData,
      items: updatedItems,
    });
    console.log(invoiceData, "invoicedata");
  };

  // Add a new item row to the invoice
  const handleAddItem = () => {
    setInvoiceData(prevData => {
      const updatedItems = [...prevData.items, { ...lineItems }];
      return {
        ...prevData,
        items: updatedItems,
      };
    });

    // Logging here might not reflect the update immediately
    console.log("Added new line item");
  };

  //Handle input data
  const HandleInputAddData=(e)=>{
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value})
  };


  //Accounting code selection
  const codeSelection = accountsData.map(account => ({
    value: account.code,
    label: `${account.code}-${account.name}`
  }));

  // Initialize default dates
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const defaultDueTime = 45; // 45 days from today
    const dueDate = new Date(Date.now() + defaultDueTime * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    setInvoiceData(prevData => ({
      ...prevData,
      invoiceDate: today,
      dueDate: dueDate
    }));


  }, []);


  useEffect(() => {
    console.log(invoiceData, "Invoice Data changed")
  }, [invoiceData])




  return (
    <div className="bg-white p-6">
      <div className="flex flex-col space-y-4">
        {/* Unchanged input fields (To, Date, Due Date, Invoice #, Reference) */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium" htmlFor="to">
            To
          </label>
          <input className="border-gray-300 rounded-lg p-2"
            type="text"
            name="contact"

            value={invoiceData.contact}
            onChange={HandleInputAddData}
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="date">
              Date
            </label>
            <input className="border-gray-300 rounded-lg p-2"
              type="date"
              name="invoiceDate"
              defaultValue={invoiceData.invoiceDate}
              onChange={HandleInputAddData}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="due-date">
              Due Date
            </label>
            <input className="border-gray-300 rounded-lg p-2"
              type="date"
              name="dueDate"
              defaultValue={invoiceData.dueDate}
              onChange={HandleInputAddData}

            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="invoice-number">
              Invoice #
            </label>
            <input className="border-gray-300 rounded-lg p-2"
              type="text"
              name="invoiceNo"
              placeholder='INV-###'
              value={invoiceData.invoiceNo}
              onChange={HandleInputAddData}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="reference">
              Reference
            </label>
            <input className="border-gray-300 rounded-lg p-2"
              type="text"
              name="reference"
              placeholder='shopping'
              value={invoiceData.reference}
              onChange={HandleInputAddData}
            />
          </div>
        </div>

        {/* Invoice table */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <EntryTable data={invoiceData.items} handleInputChange={handleItemChange} handleAddItem={handleAddItem} codeSelection={codeSelection} isInvoice={true} />

              </div>

            </div>
          </div>
        </div>




        {/* End of Invoice table */}

        {/* Unchanged input fields (Subtotal, Total VAT, TOTAL) */}
        <div className="flex justify-between">
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="subtotal">
              Subtotal
            </label>

            <input className="border-gray-300 rounded-lg p-2"
              type="number"
              name="subTotal"
              placeholder={invoiceData.subTotal}
              readOnly
            />

          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="total-vat">
              Total VAT @ 20%
            </label>
            <input className="border-gray-300 rounded-lg p-2"
              type="number"
              name="taxTotal"
              placeholder={invoiceData.taxTotal}
              readOnly
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="total">
              TOTAL
            </label>
            <input className="border-gray-300 rounded-lg p-2"
              type="number"
              name="total"
              placeholder={invoiceData.total}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
