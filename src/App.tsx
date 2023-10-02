import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';

function AppUI() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index path='/' element={<HomePage />} />
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
