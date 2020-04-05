import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import uniqid from "uniqid";

import { MAPBOX_TOKEN } from '../settings/constants';
import { useMarkers } from '../context/Markers.context';

const Map = () => {
    const { markers, setMarkers } = useMarkers();
    const [viewport, setViewport] = useState({
        latitude: 52.237049,
        longitude: 21.017532,
        zoom: 10
    });

    const onMapClick = ({ lngLat }) => {
        const [longitude, latitude] = lngLat;
        const marker = {
            id: uniqid(),
            longitude,
            latitude
        }
        setMarkers(markers => [...markers, marker])
    };

    const onMarkerDragEnd = ({ target, lngLat }) => {
        const [longitude, latitude] = lngLat;
        setMarkers(() => markers.map(marker => {
            if (marker.id === target.id) {
                return {
                    id: target.id,
                    longitude,
                    latitude
                }
            }
            return marker;
        })); 
    };

    return (
        <ReactMapGL
            {...viewport}
            width='100%'
            height='70vh'
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle='mapbox://styles/krzosdominik/ck8kvp89m032h1inawuv4wqsn'
            onViewportChange={viewport => setViewport(viewport)}
            onClick={onMapClick}
        >
            {markers.map(({ id, longitude, latitude }) => (
                <Marker
                    key={id}
                    longitude={longitude}
                    latitude={latitude}
                    draggable
                    onDragEnd={onMarkerDragEnd}
                >
                    <span className="h3 text-danger text-bold">
                        <i id={id} className="now-ui-icons location_pin"></i>
                    </span>
                </Marker>
            ))}
        </ReactMapGL>
    );
}

export default Map;