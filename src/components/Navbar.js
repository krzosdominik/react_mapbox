import React, { useState, useEffect } from "react";
import { NavbarBrand, Navbar, Container, Nav, NavItem, NavLink } from "reactstrap";

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
        <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        href="#"
                        id="navbar-brand"
                    >
                        React Mapbox
                        </NavbarBrand>
                </div>
                <Nav navbar>
                    <NavItem>
                        <NavLink
                            href="#pablo"
                            onClick={e => {
                                e.preventDefault();
                                document
                                    .getElementById("main")
                                    .scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <i className="now-ui-icons location_map-big"></i>
                            <p>Start</p>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;