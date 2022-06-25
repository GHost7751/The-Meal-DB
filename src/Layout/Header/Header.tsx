import React, { FC } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header:FC = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand >The Meal DB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-right">
                            <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
                            <Link to='/Categories'><Nav.Link href="#link">Categories</Nav.Link></Link>
                            <Link to='/'><Nav.Link href="#link">Search</Nav.Link></Link>
                            <Link to='/SingleRandomMea'><Nav.Link href="#link">Single Random Meal</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar> 
        </div>
    );
};

export default Header;