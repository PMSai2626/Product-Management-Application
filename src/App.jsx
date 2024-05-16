import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductProvider from './context/ProductContext';
import ProductListPage from './pages/ProductListPage';
import AddProduct from './pages/AddProduct';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <div>
          <header>
            <h1>Product Management Application</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ProductListPage />} />
              <Route path="/add" element={<AddProduct />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
