  import React from 'react';
  import Header from './components/Header';
  import Sidebar from './components/NewSidebar';
  import Dashboard from './components/Dashboard';
  import './App.scss';

  const App = () => {
    return (
      <div className='layout'>
        <Header />
        <div className="page">
          <Sidebar />
          <div className="page-right">
            <Dashboard />
          </div>
        </div>
      </div>
    );
  };

  export default App;
