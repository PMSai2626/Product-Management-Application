import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductForm = ({ product, onSubmit }) => {
  const { categories } = useContext(ProductContext);
  const handleSubmit = event => {
    event.preventDefault();
    const { category, name, description, price } = event.target.elements;
    onSubmit({
      category: category.value,
      name: name.value,
      description: description.value,
      price: price.value
    });
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <label>Category</label>
        <select name="category" defaultValue={product?.category || ''}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="form-item">
        <label>Name</label>
        <input name="name" defaultValue={product?.name || ''} required />
      </div>
      <div className="form-item">
        <label>Description</label>
        <input name="description" defaultValue={product?.description || ''} required />
      </div>
      <div className="form-item">
        <label>Price</label>
        <input name="price" type="number" defaultValue={product?.price || ''} required />
      </div>
      <button className="button button-primary" type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
