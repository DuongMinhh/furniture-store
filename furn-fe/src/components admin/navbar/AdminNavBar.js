import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import './AdminNavBar.scss';

export default function AdminNavBar() {
    return (
        <div className="AdminNavBar">
            <Navbar bg="custom" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">FURN STORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Trang chủ</Nav.Link>
                            <Nav.Link href="/san-pham">Sản phẩm</Nav.Link>
                            <Nav.Link href="#story">Câu chuyện</Nav.Link>
                            <Nav.Link href="#contact">Liên hệ</Nav.Link>
                            <NavDropdown title="Chuyển đến" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Giỏ hàng</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Đăng ký</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Đăng nhập</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Góp ý cho chúng tôi</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex search-form">
                            <FormControl
                                type="search"
                                placeholder="Tìm kiếm sản phẩm"
                                className="me-2 input-search-form"
                                aria-label="Search"
                            />
                            <Button className="btn-info btn-search-form"><FontAwesomeIcon icon={faSearch} /></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
