import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import './NavBar.scss';

export default function NavBar() {
    return (
        <div className="NavBar">
            <Navbar bg="custom" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">FURN STORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#product">Product</Nav.Link>
                            <Nav.Link href="#story">Story</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <NavDropdown title="Navigation" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Your cart</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Contribute us</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className="btn-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
