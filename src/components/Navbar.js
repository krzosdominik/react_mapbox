import React, { useState, useEffect } from "react";
import { NavbarBrand, Navbar, Container } from "reactstrap";

const Header = () => {
    const [navbarColor, setNavbarColor] = useState("navbar-transparent");

    useEffect(() => {
        const updateNavbarColor = () => {
            const { scrollTop } = document.documentElement;
            if (scrollTop > 399) {
                setNavbarColor("");
            } else if (scrollTop < 400) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            href="/"
                            target="_blank"
                            id="navbar-brand"
                        >
                            React Mapbox
                        </NavbarBrand>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;