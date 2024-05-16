import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductForm from './ProductForm';

const EditProductModal = ({ product }) => {
  const [visible, setVisible] = useState(false);
  const { updateProduct } = useContext(ProductContext);

  const handleUpdate = updatedProduct => {
    updateProduct({ ...product, ...updatedProduct });
    setVisible(false);
  };

  return (
    <>
      <button className="button" onClick={() => setVisible(true)}>Edit</button>
      {visible && (
        <>
          <div className="modal-backdrop" onClick={() => setVisible(false)}></div>
          <div className="modal">
            <h2>Edit Product</h2>
            <ProductForm product={product} onSubmit={handleUpdate} />
            <button className="button" onClick={() => setVisible(false)}>Cancel</button>
          </div>
        </>
      )}
    </>
  );
};

export default EditProductModal;
