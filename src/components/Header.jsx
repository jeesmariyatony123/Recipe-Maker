import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  return (
    <div>

      <Navbar bg="info"  >
        <Container>
          <Link to={'/'} style={{ textDecoration: "none" }} className='fs-1'><Navbar.Brand  className='syne-tactile-regular fs-1'>Recipe Maker</Navbar.Brand></Link>
          <Nav className="ms-auto p-4">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='px-3'> <a>Home</a></Link>
            <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }} className='px-3'><a>Recipes</a></Link>
            <Link to={'/favorite'} style={{ textDecoration: 'none', color: 'white' }} className='px-3'> <a>Favourite </a></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} className='px-3'> <a>Login</a></Link>

          </Nav>
        </Container>
      </Navbar>


      {/* {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-primary mb-3 ">
          <Container fluid>
            <Link to={'/'} style={{ textDecoration: "none" }} className='fs-1 ps-5'><Navbar.Brand >Recipes</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Recipes
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to={'/home'} style={{ textDecoration: 'none' }} className='px-3 fs-4'><a>Home</a></Link>
                  <Link to={'/favorite'} style={{ textDecoration: 'none' }} className='px-3 fs-4'> <a>Favorite</a></Link>
                  <Link style={{ textDecoration: 'none' }} className='px-3 fs-4'> <a>Categories</a></Link>



                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}



    </div>
  )
}

export default Header