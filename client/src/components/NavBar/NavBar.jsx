import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
import { Nav, Navbar, Container } from 'react-bootstrap';


const NavBar = () => {

  return (
	<Navbar>
		<Container>
			<Navbar.Brand href='/'>Logo</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbar' />
			<Navbar.Collapse id='navbar' className='justify-content-end'>
				<Nav>
					<Nav.Link><Link to="/" className='link'>Home</Link></Nav.Link>
					<Nav.Link><Link to="/form" className='link'>Login</Link></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
  )
}

export default NavBar