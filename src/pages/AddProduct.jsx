import  { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import ProductForm from '../components/ProductForm';

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleAdd = product => {
    addProduct(product);
    navigate('/');
  };

  return (
    <div className="card">
      <h2 className="card-title">Add New Product</h2>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddProduct;
