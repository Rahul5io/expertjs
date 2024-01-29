import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/reports.css';

function Reports() {
  return (
    <div className="reports-container">
      <h1>Reports</h1>
      <div className="reports-grid">
        {/* Add a Link to navigate to TrialBalance */}
        <Link to="/trialBalance">
          <button className="trial-balance-button">Trial Balance</button>
        </Link>


        <Link to="/profitloss">
          <button className="trial-balance-button">Profit & loss</button>
        </Link>

        <Link to="/balanceSheet">
          <button className="trial-balance-button">Balance Sheet</button>
        </Link>
        {/* Add other report components or content here */}
      </div>
    </div>
  );
}

export default Reports;
