import React from "react";

export function BsReportSearch() {
    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
                {/* Replace Select component */}
                <select id="report-period">
                    <option value="custom">Custom</option>
                </select>

                <div className="flex items-center space-x-2">

                    <div className="flex items-center space-x-1">
                        <input placeholder="01.10.2020" type="date" />

                        <button
                            className="mx-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Run report</button>
                    </div>
                </div>



            </div>
        </div>

    )
}



export function PlTbSearch() {
    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
                {/* Replace Select component */}
                <select id="report-period">
                    <option value="custom">Custom</option>
                </select>

                <div className="flex items-center space-x-2">

                    <div className="flex items-center space-x-1">

                        <input placeholder="01.10.2020" type="date" />
                        <span>to</span>
                        <input placeholder="01.10.2020" type="date" />

                        <button
                            className="mx-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2   me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Run report</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

