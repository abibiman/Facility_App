import React, { createContext, useContext, useState } from "react";

const LabsDetailsContext = createContext();

export const useLabsDetails = () => {
  const context = useContext(LabsDetailsContext);
  if (!context) {
    throw new Error(
      "useGeneralDetails must be used within a GeneralDetailsProvider"
    );
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const LabsDetailsProvider = ({ children }) => {
  const [labsDetails, setLabsDetails] = useState([]);

  return (
    <LabsDetailsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        labsDetails,
        setLabsDetails,
      }}
    >
      {children}
    </LabsDetailsContext.Provider>
  );
};
