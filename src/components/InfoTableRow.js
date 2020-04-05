import React, { useMemo } from 'react';
import { Button } from 'reactstrap';
import formatcoords from 'formatcoords';

import { useMarkers } from '../context/Markers.context';

const InfoTableRow = ({ id, longitude, latitude }) => {
    const { onMarkerRemove } = useMarkers();

    const handleMarkerRemove = () => onMarkerRemove(id);

    const coords = useMemo(() => {
        return formatcoords(latitude, longitude).format();
    }, [longitude, latitude]);

    return (
        <tr>
            <th className="align-middle" scope="row">{id}</th>
            <td className="align-middle">{coords}</td>
            <td className="td-actions text-right align-middle">
                <Button
                    className=""
                    type="button"
                    color="danger"
                    size="sm"
                    aria-label="Delete"
                    onClick={handleMarkerRemove}
                >
                    <span aria-hidden="true">Delete</span>
                </Button>
            </td>
        </tr>
    )
}

export default InfoTableRow;