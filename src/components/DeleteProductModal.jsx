import React, { useState } from 'react';

const DeleteProductModal = ({ productId, deleteProduct }) => {
  const [visible, setVisible] = useState(false);

  const handleDelete = () => {
    deleteProduct(productId);
    setVisible(false);
  };

  return (
    <>
      <button className="button button-danger" onClick={() => setVisible(true)}>
        Delete
      </button>
      {visible && (
        <>
          <div className="modal-backdrop" onClick={() => setVisible(false)}></div>
          <div className="modal">
            <h2>Delete Product</h2>
            <p>Are you sure you want to delete this product?</p>
            <button className="button button-danger" onClick={handleDelete}>Delete</button>
            <button className="button" onClick={() => setVisible(false)}>Cancel</button>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteProductModal;
