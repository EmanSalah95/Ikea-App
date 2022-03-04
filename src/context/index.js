import { createContext,useState } from 'react';
export const ModalContext = createContext();

const SearchModalProvider = ({ children }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  return (
    <ModalContext.Provider value={{ isSearchVisible, setSearchVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export default SearchModalProvider;
