import React, { createContext, useState, useEffect, useContext } from 'react';
import { categories, products, subcategories } from '../api';

// Create the context
const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [subCategoriesData, setSubCategoriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsFetch = await products();
      let saved = JSON.parse(localStorage.getItem("saved"));
      saved = saved ? saved : [];

      const newProducts = productsFetch.map(save => ({ ...save, liked: saved.includes(save.id) ? true : false }));
      setProductsData(newProducts);

      const categoriesFetch = await categories(); 
      setCategoriesData(categoriesFetch); 

      const subcategoriesFetch = await subcategories(); 
      setSubCategoriesData(subcategoriesFetch); 
    };

    fetchData(); 
  }, []); 

  return (
    <ProductContext.Provider value={{ productsData, setProductsData, categoriesData, setCategoriesData, subCategoriesData, setSubCategoriesData }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProduct = () => {
  return useContext(ProductContext);
};
