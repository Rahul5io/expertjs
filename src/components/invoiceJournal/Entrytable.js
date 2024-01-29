// EntryTable.js
import React from 'react';
import Select from 'react-select';

const EntryTable = ({ data, handleInputChange, handleAddItem, codeSelection, isInvoice }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(data[0]).map((key, index) => (
                    <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index}>
                    {Object.keys(item).map((key, innerIndex) => (
                      <td key={innerIndex} className="px-6 py-4 whitespace-nowrap">
                        {key === "accountingCode" ? (
                          <Select
                            options={codeSelection}
                            className="border-gray-300 rounded-lg"
                            name="accountingCode"
                            placeholder="Select Account"
                            onChange={(selectedOption) => handleInputChange(index, "accounting_Code", selectedOption.value, isInvoice)}
                          />
                        ) : (
                          <input
                            className="border-gray-300 rounded-lg p-2"
                            type={key === "quantity" || key === "unitPrice" || key === "amount" ? "number" : "text"}
                            name={key}
                            value={item[key]}
                            onChange={(e) => handleInputChange(index, key, e.target.value, isInvoice)}
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none" variant="outline" onClick={handleAddItem}>
          Add row
        </button>
      </div>
    </div>
  );
};

export default EntryTable;
