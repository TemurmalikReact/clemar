import React, { createContext, useState, useContext } from 'react';
import { products } from '../utils/data';

// Create the context
const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(products);

  return (
    <ProductContext.Provider value={{ productsData, setProductsData }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProduct = () => {
  return useContext(ProductContext);
};
