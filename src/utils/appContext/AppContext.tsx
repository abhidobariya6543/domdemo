import { AppContextType } from './types';
import { createContext, ReactNode, useContext, useState } from 'react';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activePagination, setActivePagination] = useState<number | undefined>(0)

  return (
    <AppContext.Provider
      value={{
        activePagination,
        setActivePagination
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppData = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppData must be used within a AppProvider");
  }
  return context;
};