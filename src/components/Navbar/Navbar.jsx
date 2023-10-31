import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function MainNavbar() {
    return (
        <Navbar expand="lg" className="bg-dark fixed-top">
            <Container>
                <Navbar.Brand className='text-white'>1.5 Shekel Supermarket</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className="nav-link home text-decoration-none ms-3 text-white">Home</Link>
                        <Link to="/products" className="nav-link text-decoration-none ms-3 text-white">Products</Link>
                        <Link to="/resturant" className="nav-link text-decoration-none ms-3 text-white">Resturant</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar