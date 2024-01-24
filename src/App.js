
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Navbar from './components/navbar';
import Invoices from './pages/invoices';
import ManualJournal from './pages/manualjournal';
import Invoice from './pages/Invoice';
import ChartofAccounts from './components/chartofAccounts';
import Report from './pages/reports';
import ChatAi from './pages/chatai';


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/invoices" element={<Invoice />} />
        <Route path="/manualjournal" element={<ManualJournal />} />
        <Route path="/reports" element={<Report />} />
        <Route path='/chartofAccounts' element={<ChartofAccounts/>} />
        <Route path='/chatAI' element={<ChatAi/>} />

      </Routes>
    </Router>

  );
}

export default App;
