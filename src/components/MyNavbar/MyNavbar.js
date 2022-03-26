import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

export default function MyNavbar() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar fixed='top' variant="light" bg="light" expand="lg">
        <Container>
          <Navbar.Brand  onClick={()=>navigate('/')} style={{cursor:'pointer'}} >
            <img style={{height: '40px'}} src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{marginLeft:'auto'}}>
              <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
              <Nav.Link  onClick={()=>navigate('/blog')}>Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
