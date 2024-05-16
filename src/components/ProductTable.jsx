import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import EditProductModal from './EditProductModal';
import DeleteProductModal from './DeleteProductModal';

const ProductTable = ({ products }) => {
  const { deleteProduct } = useContext(ProductContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <EditProductModal product={product} />
              <DeleteProductModal productId={product.id} deleteProduct={deleteProduct} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
