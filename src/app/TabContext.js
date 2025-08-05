"use client";
import React, { createContext, useContext, useState } from 'react';

// Possible values: 'enterprise' | 'candidate'
const TabContext = createContext({
  selectedTab: 'candidate',
  setSelectedTab: () => {},
});

export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('candidate');
  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);
