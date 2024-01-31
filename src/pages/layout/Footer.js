import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" fixed="bottom">
            <Container>
                <Navbar.Text color='light'>
                    © {new Date().getFullYear()} MahiVista Solutions LLP.
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Footer;