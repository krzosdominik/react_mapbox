import React, { createContext, useState, useContext } from 'react';

const MarkersContext = createContext();

export const useMarkers = () => {
    return useContext(MarkersContext);
}

export const MarkersProvider = ({ children }) => {
    const [markers, setMarkers] = useState([]);

    return (
        <MarkersContext.Provider value={{ markers, setMarkers }}>
            {children}
        </MarkersContext.Provider>
    )
};