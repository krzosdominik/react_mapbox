import React from 'react';
import { Table } from 'reactstrap';

import { useMarkers } from '../context/Markers.context';
import InfoTableRow from './InfoTableRow';

const InfoTable = ({ currentPage, pageSize }) => {
    const { markers } = useMarkers();

    return (
        <Table striped responsive size="sm">
            <thead>
                <tr>
                    <th className="align-middle">Marker ID</th>
                    <th className="align-middle">Coordinates</th>
                    <th className="align-middle text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {markers
                    .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                    .map(({ id, longitude, latitude }, index) => (
                        <InfoTableRow
                            key={id}
                            id={id}
                            longitude={longitude}
                            latitude={latitude}
                            index={index}
                        />
                    ))}
            </tbody>
        </Table>
    )
};

export default InfoTable;