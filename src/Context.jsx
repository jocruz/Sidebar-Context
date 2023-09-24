import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const Context = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [isModalOpen, setModal] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };
  const openModal = () => {
    setModal(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
