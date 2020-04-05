import React, { createContext, useState, useContext } from 'react';
import uniqid from 'uniqid';

const MarkersContext = createContext();

export const useMarkers = () => {
    return useContext(MarkersContext);
}

export const MarkersProvider = ({ children }) => {
    const [markers, setMarkers] = useState([]);

    const onMapClick = coordinates => {
        const [longitude, latitude] = coordinates;
        const marker = {
            id: uniqid(),
            longitude,
            latitude
        };
        setMarkers([...markers, marker]);
    };

    const onMarkerDragEnd = (coordinates, id) => {
        const [longitude, latitude] = coordinates;
        setMarkers(markers.map(marker => {
            if (marker.id === id) {
                return {
                    id,
                    longitude,
                    latitude
                }
            }
            return marker;
        }));
    };

    const onMarkerRemove = id => setMarkers(markers.filter(marker => marker.id !== id));

    return (
        <MarkersContext.Provider
            value={{
                markers,
                onMapClick,
                onMarkerDragEnd,
                onMarkerRemove
            }}>
            {children}
        </MarkersContext.Provider>
    )
};