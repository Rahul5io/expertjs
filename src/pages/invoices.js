import React, { useEffect, useState } from 'react';



function Invoices() {
    //Invoice Data
    const [data, setData] = useState(
        {
            invoiceDate: '',
            dueDate: '',
            contact: '',
            invoiceNo: 'fdsf',
            Reference: '',
            subTotal: 0,
            taxTotal: 0,
            Total: 0,

        }

    );



    const handleChange = (e) => {
        if (e.target.name === 'invoiceDate') {
            setData(prevData => ({
                ...prevData, invoiceDate: e.target.value
            })
            );
        } else if (e.target.name === 'dueDate') {
            setData(prevData => ({
                ...prevData, dueDate: e.target.value
            })
            );
        } else if (e.target.name === 'reference') {
            setData(prevData => ({
                ...prevData, Reference: e.target.value
            })
            );
        } else if (e.target.name === 'invoiceNo') {
            setData(prevData => ({
                ...prevData, invoiceNo: e.target.value
            })
            );
        } else if (e.target.name === 'contact' ) {
            setData(prevData => ({
                ...prevData, contact: e.target.value
            })
            ); 
        }
    };

    function addDateAndDue() {

        //Date
        const today = new Date().toISOString().split('T')[0];

        //Due Date
        const defaultDueTime = 45;
        const dueDate = new Date(Date.now() + defaultDueTime * 24 * 60 * 60 * 1000).toISOString().split('T')[0]


        setData(prevData => ({
            ...prevData,
            invoiceDate: today,
            dueDate: dueDate
        }))

    };

    useEffect(() => {
        addDateAndDue();

    }, [])

    return (
        <div>
            <h1>Invoices</h1>
            <p>{data.contact} {data.invoiceDate} {data.dueDate} {data.invoiceNo} {data.Reference} </p>

            <form>

                <label>To</label>
                <input
                    type="text"
                    name="contact"
                    value={data.contact}
                    defaultValue={data.contact}
                    onChange={handleChange}

                />

                <label>Date</label>
                <input
                    type="date"
                    name="invoiceDate"
                    value={data.invoiceDate}
                    defaultValue={data.invoiceDate}
                    onChange={handleChange}
                />

                <label>Due Date</label>
                <input
                    type="date"
                    name="dueDate"
                    value={data.dueDate}
                    defaultValue={data.dueDate}
                    onChange={handleChange}
                />

                <label>invoice No</label>
                <input
                    type="text"
                    name="invoiceNo"
                    value={data.invoiceNo}
                    defaultValue={data.invoiceNo}
                    onChange={handleChange}

                />


                <label>Reference</label>
                <input
                    type="text"
                    name="reference"
                    value={data.Reference}
                    defaultValue={data.Reference}
                    onChange={handleChange}
                />


            </form>
        </div>
    );
}

export default Invoices;