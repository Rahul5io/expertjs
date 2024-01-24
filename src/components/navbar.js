import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
        end // use end to match the exact path
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/invoices"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        Invoices
      </NavLink>
      <NavLink
        to="/reports"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        Reports
      </NavLink>

      <NavLink
        to="/manualjournal"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        Manual Journal
      </NavLink>

      <NavLink
        to="/chartofAccounts"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
      Chart of Accounts
      </NavLink>

      <NavLink
        to="/chatAI"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
      Chat AI
      </NavLink>
      {/* Add more nav items as needed */}
    </nav>
  );
}

export default Navbar;