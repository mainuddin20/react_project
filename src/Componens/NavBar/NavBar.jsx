import React, { useEffect, useState } from 'react';
import  { Fragment} from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';





    const NavBar =() => {
        const [sticky, setSticky] = useState(false);
        useEffect(() =>{

            window.addEventListener('scroll', ()=>{
                window.scrollY > 10 ? setSticky(true): setSticky(false)
            })
        });
        return(
            <Fragment>
                  <Navbar fixed='top' collapseOnSelect expand="lg" className={ `${sticky? 'navbgcolor' : '' }` }>
                        <Container>
                        <Navbar.Brand href="#home"><img src={logo} alt="" ></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                              
                        
                        </Nav>
                        <Nav >
                              <Nav.Link href="#deets" className='text-white fs-6 text-uppercase'>Home</Nav.Link>
                              
                              <Nav.Link href="#deets" className='text-white fs-6 text-uppercase'>Service</Nav.Link>
                              <Nav.Link href="#deets" className='text-white fs-6 text-uppercase'>Portfolio</Nav.Link>
                              <Nav.Link href="#deets" className='text-white fs-6 text-uppercase'>Contact</Nav.Link>
                              <Nav.Link href="#deets" className='text-white fs-6 text-uppercase'>About</Nav.Link>
                              
                        </Nav>
                        </Navbar.Collapse>
                        </Container>
                  </Navbar>

            </Fragment>
        );
    }


export default NavBar;