import React, {createRef, useEffect} from 'react';
import { Container } from 'reactstrap';

const Jumbotron = () => {
    let pageHeader = createRef();

    useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    'translate3d(0,' + windowScrollTop + 'px,0)';
            };
            window.addEventListener('scroll', updateScroll);
            return function cleanup() {
                window.removeEventListener('scroll', updateScroll);
            };
        }
    });
    return (
        <>
            <div className="page-header clear-filter" filter-color="gray">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: 'url(' + require('../assets/img/forest.jpg') + ')'
                    }}
                    ref={pageHeader}
                ></div>
                <div className="content-center">
                    <Container>
                        <div className="content-center brand">
                            <h1 className="h1-seo">React Mapbox App</h1>
                            <h3>Using React, Mapbox GL JS and Creative Tim Now UI Kit</h3>
                        </div>
                    </Container>
                </div>

            </div>
        </>
    );
}

export default Jumbotron;