"use client";
import React, { createContext, useContext, useState } from 'react';

// Possible values: 'enterprise' | 'candidate'
const TabContext = createContext({
  selectedTab: 'enterprise',
  setSelectedTab: () => {},
});

export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('enterprise');
  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);
