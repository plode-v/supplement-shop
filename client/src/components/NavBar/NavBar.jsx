import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
import axios from 'axios';
import { Nav } from "react-bootstrap"

function NavBar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
	const token = localStorage.getItem("token");
	if (token) {
		axios.get("http://localhost:4000/api/me", {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(response => {
			setIsLoggedIn(true);
			setUsername(response.data.user.username);
			console.log(username)
		})
		.catch(error => {
			console.log("Authentication error:", error)
		}) 
	}
  }, []);

  return (
	<nav className='active'>
		<Link to="/" id='logo'>Logo</Link>
		<ul>
			<li>
				<Link to="/" className='link'>Home</Link>
			</li>
			{isLoggedIn ? (
				<li>{username}</li>
			) : (
				<li>
					<Link className='link' to="/login">Login</Link>
				</li>
			)}
		</ul>
	</nav>
  )
}

export default NavBar