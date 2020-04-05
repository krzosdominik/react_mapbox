import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";

import { MAPBOX_TOKEN, MAP_STYLE } from '../settings/constants';
import { useMarkers } from '../context/Markers.context';

const Map = () => {
    const { markers, handleMapClick, handleMarkerDragEnd } = useMarkers();
    const [viewport, setViewport] = useState({
        latitude: 52.237049,
        longitude: 21.017532,
        zoom: 10
    });

    const onMapClick = ({ lngLat }) => handleMapClick(lngLat);

    const onMarkerDragEnd = ({ lngLat }, id) => handleMarkerDragEnd(lngLat, id);

    return (
        <ReactMapGL
            {...viewport}
            width='100%'
            height='70vh'
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={MAP_STYLE}
            onViewportChange={viewport => setViewport(viewport)}
            onClick={onMapClick}
        >
            {markers.map(({ id, longitude, latitude }) => (
                <Marker
                    key={id}
                    longitude={longitude}
                    latitude={latitude}
                    draggable
                    onDragEnd={event => onMarkerDragEnd(event, id)}
                >
                    <span className="h3 text-danger">
                        <i className="now-ui-icons location_pin"></i>
                    </span>
                </Marker>
            ))}
        </ReactMapGL>
    );
}

export default Map;