import React from 'react';
import { Button } from 'reactstrap';
import formatcoords from "formatcoords";

import { useMarkers } from '../context/Markers.context';

const InfoTableRow = ({ id, longitude, latitude }) => {
    const { handleDeleteClick } = useMarkers();

    const onDeleteClick = id => handleDeleteClick(id);

    const coords = formatcoords(latitude, longitude);

    return (
        <tr>
            <th className="align-middle" scope="row">{id}</th>
            <td className="align-middle">{coords.format()}</td>
            <td className="td-actions text-right align-middle">
                <Button
                    className=""
                    type="button"
                    color="danger"
                    size="sm"
                    aria-label="Delete"
                    onClick={onDeleteClick.bind(this, id)}
                >
                    <span aria-hidden="true">Delete</span>
                </Button>
            </td>
        </tr>
    )
}

export default InfoTableRow;