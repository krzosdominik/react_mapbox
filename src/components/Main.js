import React from 'react';
import { Container } from 'reactstrap';

import Accordion from './Accordion';
import { MarkersProvider } from '../context/Markers.context';

const Main = () => {
    return (
        <section id="main" className="section content-center" style={{ minHeight: "50vh" }}>
            <Container>
                <h2 className="text-center">
                    Test app and <strong className="text-info">have fun!</strong>
                </h2>
                <MarkersProvider>
                    <Accordion />
                </MarkersProvider>
            </Container>
        </section>
    )
}

export default Main;