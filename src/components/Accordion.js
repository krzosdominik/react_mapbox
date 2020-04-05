import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Collapse, Button } from 'reactstrap';

import { arrowStyle, accordionAttributes as attributes } from '../settings/constants';
import Map from './Map';
import MarkersInfo from './MarkersInfo';

const Accordion = () => {
    const [collapses, setCollapses] = useState([]);

    const changeCollapse = id => collapses.includes(id)
        ? setCollapses(collapses.filter(item => item !== id))
        : setCollapses([...collapses, id]);

    const toggleArrows = id => collapses.includes(id)
        ? 'now-ui-icons arrows-1_minimal-up'
        : 'now-ui-icons arrows-1_minimal-down';

    return (
        <div id="acordeon">
            <div aria-multiselectable={true} id="accordion" role="tablist">
                <Card className="no-transition">

                    <CardHeader className="card-collapse" id="headingOne" role="tab">
                        <Button
                            aria-expanded={collapses.includes('collapseOne')}
                            id="collapseOne"
                            onClick={({ target }) => changeCollapse(target.id)}
                            {...attributes}
                        >
                            <i className="now-ui-icons location_map-big"></i>{" "}
                            Map
                            <i className={toggleArrows('collapseOne')} style={arrowStyle}></i>
                        </Button>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes('collapseOne')}>
                        <CardBody>
                            <Map />
                        </CardBody>
                    </Collapse>

                    <CardHeader className="card-collapse" id="headingTwo" role="tab">
                        <Button
                            aria-expanded={collapses.includes('collapseTwo')}
                            id="collapseTwo"
                            onClick={({ target }) => changeCollapse(target.id)}
                            {...attributes}
                        >
                            <i className="now-ui-icons location_pin"></i>{" "}
                            Markers information
                            <i className={toggleArrows('collapseTwo')} style={arrowStyle}></i>
                        </Button>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes('collapseTwo')}>
                        <CardBody>
                            <MarkersInfo />
                        </CardBody>
                    </Collapse>

                </Card>
            </div>
        </div>
    );
}

export default Accordion;