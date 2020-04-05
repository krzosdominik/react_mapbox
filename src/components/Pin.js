import React from 'react';
import { Marker } from 'react-map-gl';

import { useMarkers } from '../context/Markers.context';

const Pin = ({ id, longitude, latitude }) => {
    const { onMarkerDragEnd } = useMarkers();

    const handleMarkerDragEnd = ({ lngLat }) => onMarkerDragEnd(lngLat, id);

    return (
        <Marker
            longitude={longitude}
            latitude={latitude}
            draggable
            onDragEnd={handleMarkerDragEnd}
        >
            <span className="h3 text-danger">
                <i className="now-ui-icons location_pin"></i>
            </span>
        </Marker>
    )
}

export default Pin;