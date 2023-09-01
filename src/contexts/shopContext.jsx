import { createContext } from "react";

export const shopContext = createContext();

export const ShopContextProvider = ({ allStates, children }) => {
  return (
    <shopContext.Provider value={allStates}>{children}</shopContext.Provider>
  );
};
