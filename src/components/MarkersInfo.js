import React from 'react';

import { useMarkers } from '../context/Markers.context';
import InfoTable from './InfoTable';

const MarkersInfo = () => {
    const { markers } = useMarkers();

    return (
        <>
            {markers.length > 0 && <InfoTable />}
        </>
    )
}

export default MarkersInfo;