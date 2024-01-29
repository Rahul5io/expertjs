// File: YourMainComponent.js
import React from 'react';
import {BsReportSearch} from '../components/ui/reportSearch';

// Importing the basic table components
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/table";

export default function BalanceSheet() {
    return (
        <div className="max-w-4xl mx-auto my-8">
            <div className="text-center">
                <h1 className="text-2xl font-semibold">BALANCE SHEET</h1>
                <p className="text-lg">As of May 13, 2019</p>
            </div>
            <div className="mt-6">
         <BsReportSearch />

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead />
                            <TableHead className="text-left">AS OF MAY 13, 2019</TableHead>
                            <TableHead className="text-left">AS OF MAY 13, 2019 (PY)</TableHead>
                            <TableHead className="text-left">CHANGE</TableHead>
                            <TableHead className="text-left">% CHANGE</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">ASSETS</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Current Assets</TableCell>
                            <TableCell>$37,360.79</TableCell>
                            <TableCell>$36,450.13</TableCell>
                            <TableCell>$910.66</TableCell>
                            <TableCell>2.50%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fixed Assets</TableCell>
                            <TableCell>$12,000.00</TableCell>
                            <TableCell>$0.00</TableCell>
                            <TableCell>$12,000.00</TableCell>
                            <TableCell>0.00%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">TOTAL ASSETS</TableCell>
                            <TableCell className="font-semibold">$49,360.79</TableCell>
                            <TableCell className="font-semibold">$36,450.13</TableCell>
                            <TableCell className="font-semibold">$12,910.66</TableCell>
                            <TableCell className="font-semibold">35.42%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">LIABILITIES AND EQUITY</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Liabilities</TableCell>
                            <TableCell>$76.00</TableCell>
                            <TableCell>$0.00</TableCell>
                            <TableCell>$76.00</TableCell>
                            <TableCell>0.00%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Equity</TableCell>
                            <TableCell>$49,284.79</TableCell>
                            <TableCell>$36,450.13</TableCell>
                            <TableCell>$12,834.66</TableCell>
                            <TableCell>35.21%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">TOTAL LIABILITIES AND EQUITY</TableCell>
                            <TableCell className="font-semibold">$49,360.79</TableCell>
                            <TableCell className="font-semibold">$36,450.13</TableCell>
                            <TableCell className="font-semibold">$12,910.66</TableCell>
                            <TableCell className="font-semibold">35.42%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
