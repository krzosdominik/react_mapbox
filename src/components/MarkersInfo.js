import React, { useState } from 'react';

import { useMarkers } from '../context/Markers.context';
import InfoTable from './InfoTable';
import Pagination from './Pagination';
import InfoMessage from './InfoMessage';

const MarkersInfo = () => {
    const { markers } = useMarkers();
    const [isMessageVisible, setMessageVisible] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 10;
    const pagesCount = Math.ceil(markers.length / pageSize);

    const handleAlertClose = () => setMessageVisible(false);
    const handlePaginationClick = index => setCurrentPage(index);

    return (
        <>
            {markers.length === 0 && isMessageVisible && (
                <InfoMessage
                    onClose={handleAlertClose}
                    visible={isMessageVisible}
                />
            )}
            {markers.length !== 0 && (
                <>
                    <InfoTable
                        currentPage={currentPage}
                        pageSize={pageSize}
                    />
                    <Pagination
                        currentPage={currentPage}
                        pagesCount={pagesCount}
                        onClick={handlePaginationClick}
                    />
                </>
            )}
        </>
    )
}

export default MarkersInfo;