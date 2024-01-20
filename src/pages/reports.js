import React from 'react';
import '../styles/reports.css';

function Reports() {
  const reportTypes = [
    { name: 'Balance Sheet' },
    { name: 'Profit & Loss' },
    { name: 'Trial Balance' },
    { name: 'Aged Creditors' },
    { name: 'Aged Debtors' },
  ];

  return (
    <div className="reports-container">
      <h1>Reports</h1>
      <div className="reports-grid">
        {reportTypes.map((report, index) => (
          <div key={index} className="report-card">
            <h3>{report.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;