import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import { MAPBOX_TOKEN } from '../settings/constants';

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 52.237049,
        longitude: 21.017532,
        zoom: 10
    });

    return (
            <ReactMapGL
                {...viewport}
                width='100%'
                height='70vh'
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle='mapbox://styles/krzosdominik/ck8kvp89m032h1inawuv4wqsn'
                onViewportChange={viewport => setViewport(viewport)}
            >
            </ReactMapGL>
    );
}

export default Map;