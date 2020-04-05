import React, { useState, useEffect } from 'react';

import { useMarkers } from '../context/Markers.context';
import InfoTable from './InfoTable';
import Pagination from './Pagination';
import Alert from './Alert';

const MarkersInfo = () => {
    const { markers } = useMarkers();
    const [isAlertVisible, setAlertVisible] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setAlertVisible(!markers.length)
    }, [markers])

    const pageSize = 10;
    const pagesCount = Math.ceil(markers.length / pageSize);

    const handleAlertClose = () => setAlertVisible(false);
    const handlePaginationClick = index => setCurrentPage(index);

    return (
        <>
            <Alert
                color="danger"
                message="Click on the map to add marker!"
                onClose={handleAlertClose}
                visible={isAlertVisible}
            />
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