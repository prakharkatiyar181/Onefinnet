  import React from 'react';
  import { Container, Row, Col } from 'react-bootstrap';
  import NavbarComponent from './components/NavbarComponent';
  import Sidebar from './components/NewSidebar';
  import Dashboard from './components/Dashboard';
  import './App.scss';

  const App = () => {
    return (
      <>
        <NavbarComponent />
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1 ms-3" style={{ marginTop: '56px' }}>
            <Dashboard />
          </div>
        </div>
      </>
    );
  };

  export default App;
