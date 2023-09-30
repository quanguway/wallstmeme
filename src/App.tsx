import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppUI() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          {/* <Route index path='/' element={<DashboardPage />} /> */}
          {/* <Route path='customers' element={<CustomerPage />} /> */}
        

        </Route>
        <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
      </Routes>
    </BrowserRouter>
  );
}


function App() {
  return (
    <AppUI />

  );
}

export default App;
