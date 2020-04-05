import React from 'react';
import { Table } from 'reactstrap';

import { useMarkers } from '../context/Markers.context';
import InfoTableRow from './InfoTableRow';

const InfoTable = () => {
    const { markers } = useMarkers();

    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th className="align-middle">Marker ID</th>
                    <th className="align-middle">
                        Coordinates <small className="text-muted">(Lat / Long)</small>
                    </th>
                    <th className="align-middle text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {markers.map(({ id, longitude, latitude }) => (
                    <InfoTableRow
                        key={id}
                        id={id}
                        longitude={longitude}
                        latitude={latitude}
                    />
                ))}
            </tbody>
        </Table>
    )
};

export default InfoTable;