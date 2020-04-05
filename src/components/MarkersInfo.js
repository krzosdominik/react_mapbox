import React, { useState } from 'react';

import { useMarkers } from '../context/Markers.context';
import InfoTable from './InfoTable';
import InfoMessage from './InfoMessage';

const MarkersInfo = () => {
    const { markers } = useMarkers();
    const [isMessageVisible, setMessageVisible] = useState(true);

    const handleAlertClose = () => setMessageVisible(false);

    return (
        <>
            {markers.length !== 0 && <InfoTable />}
            {markers.length === 0 && isMessageVisible && (
                <InfoMessage
                    onClose={handleAlertClose}
                    visible={isMessageVisible}
                />
            )}
        </>
    )
}

export default MarkersInfo;