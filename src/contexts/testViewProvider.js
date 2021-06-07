import React, { createContext, useState, useEffect } from "react";

export const TestViewContext = createContext();

const TestViewProvider = ({ children }) => {
  const [view, setView] = useState(localStorage.getItem("testView") || "list");

  const setListView = () => setView("list");
  const setTableView = () => setView("table");

  useEffect(() => {
    localStorage.setItem("testView", view);
  }, [view]);

  return (
    <TestViewContext.Provider
      value={{
        view,
        setListView,
        setTableView,
      }}
    >
      {children}
    </TestViewContext.Provider>
  );
};

export default TestViewProvider;
