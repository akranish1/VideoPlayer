

import React, { createContext, useState, useContext } from 'react';
const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const value = { isSidebarOpen, toggleSidebar, closeSidebar };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};