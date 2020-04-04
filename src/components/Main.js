import React from 'react';
import { Container } from 'reactstrap';

import Accordion from './Accordion';

const Main = () => {
    return (
        <section className='section content-center' style={{ minHeight: '100vh' }}>
            <Container>
                <h2 className='text-center'>
                    Test app and <strong className="text-info">have fun!</strong>
                </h2>
                <Accordion />
            </Container>
        </section>
    )
}

export default Main;