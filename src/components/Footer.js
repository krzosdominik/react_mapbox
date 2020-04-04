import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
    return (
        <footer className="footer footer-default">
            <Container>
                <div className="copyright" id="copyright">
                    © {new Date().getFullYear()}, Dominik Krzos
                    </div>
            </Container>
        </footer>
    );
}

export default Footer;