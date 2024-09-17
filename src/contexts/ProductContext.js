import React, { createContext, useState, useEffect, useContext } from 'react';
import { categories, products } from '../api';

// Create the context
const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsFetch = await products(); 
      const categoriesFetch = await categories(); 
      setProductsData(productsFetch); 
      setCategoriesData(categoriesFetch); 
    };

    fetchData(); 
  }, []); 

  return (
    <ProductContext.Provider value={{ productsData, setProductsData, categoriesData, setCategoriesData }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProduct = () => {
  return useContext(ProductContext);
};
