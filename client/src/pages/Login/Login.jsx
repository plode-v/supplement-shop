import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./styles.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    function handleLogin(event) {
        event.preventDefault();

        const LoggedIn = {
            username: username,
            password: password
        }

        axios.post("http://localhost:4000/api/login", LoggedIn)
        .then((response) => {
            console.log(response);
            navigate("/");
        })
        .catch(error => console.log(error))
    }

  return (
    <Form className='container form' onSubmit={handleLogin}>
        <Form.Group controlId='username'>
            <Form.Label>Username:</Form.Label>
            <Form.Control 
                autoComplete='off'
                type='text'
                placeholder='Username' 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </Form.Group>
        <br />
        <Form.Group controlId='password'>
            <Form.Label>Password:</Form.Label>
            <Form.Control 
                type='password'
                placeholder='Password' 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div style={{display: "grid", margin: "20px 0", lineHeight: "1.1", fontSize: "18px"}}>
                <Form.Text>Example account: <strong>example</strong></Form.Text>
                <Form.Text>Example password: <strong>example123</strong></Form.Text>
            </div>
            <Button variant='submit' type="submit">Login</Button>
        </Form.Group>
    </Form>
  )
}

export default Login