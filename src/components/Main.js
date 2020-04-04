import React from 'react';
import { Container } from 'reactstrap';

import Accordion from './Accordion';
import { MarkersProvider } from "../context/Markers.context";

const Main = () => {
    return (
        <section className='section content-center' style={{ minHeight: '100vh' }}>
            <Container>
                <h2 className='text-center'>
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