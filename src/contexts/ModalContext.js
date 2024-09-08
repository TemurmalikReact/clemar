import React, { createContext, useState, useContext } from 'react';

// Create the context
const ModalContext = createContext();

// Create a provider component
export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the ModalContext
export const useModal = () => {
  return useContext(ModalContext);
};
