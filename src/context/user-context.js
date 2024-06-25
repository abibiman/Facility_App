import React, { createContext, useContext, useState } from 'react';

const UserDetailsContext = createContext();

export const useUserDetails = () => {
  const context = useContext(UserDetailsContext);
  if (!context) {
    throw new Error('useGeneralDetails must be used within a GeneralDetailsProvider');
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const UserDetailsProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  return (
    <UserDetailsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};
