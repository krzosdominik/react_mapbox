import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import { MAPBOX_TOKEN, MAP_STYLE } from '../settings/constants';
import { useMarkers } from '../context/Markers.context';
import Pin from './Pin';

const Map = () => {
    const { markers, onMapClick } = useMarkers();
    const [viewport, setViewport] = useState({
        latitude: 52.237049,
        longitude: 21.017532,
        zoom: 10
    });

    const handleSetViewport = viewport => setViewport(viewport);

    const handleMapClick = ({ lngLat }) => onMapClick(lngLat);

    return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="70vh"
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={MAP_STYLE}
            onViewportChange={handleSetViewport}
            onClick={handleMapClick}
        >
            {markers.map(({ id, longitude, latitude }) => (
                <Pin
                    key={id}
                    id={id}
                    longitude={longitude}
                    latitude={latitude}
                />
            ))}
        </ReactMapGL>
    );
}

export default Map;