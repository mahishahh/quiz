import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" style={{ marginBottom: '20px' }}>            <Container>
            <Navbar.Brand href="/quiz">MahiVista Solutions</Navbar.Brand>
        </Container>
        </Navbar>
    );
};

export default Header;