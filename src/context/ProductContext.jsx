import { createContext, useReducer, useEffect } from 'react';
import { productReducer, initialState } from '../store/reducers';
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../store/actions';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    // Load initial data here if necessary
  }, []);

  const addProduct = product => dispatch({ type: ADD_PRODUCT, payload: product });
  const updateProduct = product => dispatch({ type: UPDATE_PRODUCT, payload: product });
  const deleteProduct = id => dispatch({ type: DELETE_PRODUCT, payload: id });

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
