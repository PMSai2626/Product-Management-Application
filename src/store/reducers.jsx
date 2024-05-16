import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './actions';

export const initialState = {
  products: [],
  categories: ['Electronics', 'Books', 'Clothing', 'Accessories']
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: state.products.length + 1 }]
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
};
