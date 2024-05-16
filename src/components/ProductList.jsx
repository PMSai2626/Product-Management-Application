import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductTable from './ProductTable';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div className="card">
        <h2 className="card-title">Product List</h2>
        <Link to="/add" className="button button-primary">Add Product</Link>
        <ProductTable products={products} />
      </div>
    </div>
  );
};

export default ProductList;
