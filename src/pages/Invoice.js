import React, { useState, useEffect } from 'react';
import { accountsData } from '../storage/chartAccountsData';
import Select from 'react-select';



export default function Invoice() {
  // State for invoice data
  const lineItems =    { description: '', qty: 1, unitPrice: 0, accountingCode: 'sales', amount: 0 };

  const [invoiceData, setInvoiceData] = useState({
    invoiceDate: '',
    dueDate: '',
    contact: '',
    invoiceNo: '',
    reference: '',
    items: [ lineItems,],
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
      const updatedItems = [...prevData.items, {...lineItems}];
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  
    // Logging here might not reflect the update immediately
    console.log("Added new line item");
  };

   // Inside your component
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
            onChange={e => setInvoiceData({ ...invoiceData, contact: e.target.value })}
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
              onChange={e => setInvoiceData({ ...invoiceData, invoiceDate: e.target.value })}
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
              onChange={e => setInvoiceData({ ...invoiceData, dueDate: e.target.value })}

            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="invoice-number">
              Invoice #
            </label>
            <input className="border-gray-300 rounded-lg p-2"
              type="text"
              name="invoiceNumber"
              placeholder='INV-###'
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
            />
          </div>
        </div>

        {/* Invoice table */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Unit Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Account
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoiceData.items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="border-gray-300 rounded-lg p-2"
                            type="text"
                            name="desctiption"

                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="border-gray-300 rounded-lg p-2"
                            type="number"
                            name="quantity"

                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="border-gray-300 rounded-lg p-2"
                            type="number"
                            name="unitPrice"

                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <Select
                                        options={codeSelection}
                                        className="border-gray-300 rounded-lg "
                                        name="accountingCode"
                                        placeholder="Select Account"
                                        styles={{
                                          menu: base => ({
                                            zIndex: 100
                                          })
                                        }}
                                    />
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="border-gray-300 rounded-lg p-2"
                            type="number"
                            name="annount"

                          />
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>

            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none" variant="outline"
            onClick={handleAddItem}>Add row</button>;

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
              name="subtotal"
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
