import React from 'react';
import { Button } from 'reactstrap';
import formatcoords from "formatcoords";

import { useMarkers } from '../context/Markers.context';

const InfoTableRow = ({ id, longitude, latitude, index }) => {
    const { markers, setMarkers } = useMarkers();

    const onDeleteClick = ({ currentTarget }) => {
        setMarkers( () => markers.filter(({ id }) => id !== currentTarget.id));
    };

    const coords = formatcoords(latitude, longitude);

    return (
        <tr>
            <th className="align-middle" scope="row">{index + 1}</th>
            <td className="align-middle">{coords.format()}</td>
            <td className="td-actions text-right align-middle">
                <Button
                    type="button"
                    color="danger"
                    size="sm"
                    aria-label="Delete"
                    onClick={onDeleteClick}
                    id={id}
                >
                    <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </span>
                </Button>
            </td>
        </tr>
    )
}

export default InfoTableRow;