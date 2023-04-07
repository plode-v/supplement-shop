import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';

const SignUp = () => {

    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    function handleSignup(event) {
        event.preventDefault();

        const registered = {
            fullName: fullName,
            username: username,
            email: email,
            password: password
        }

        axios.post("http://localhost:4000/api/signup", registered)
        .then(response => {
            console.log(response);
            setSuccess(true);
            handleSuccess();
        })
        .catch (error => console.error(error));

    }

    function handleSuccess(props) {
        if (success === true) {
            return (
                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                        </Modal.Title>
                    </Modal.Header>
        
                    </Modal>
            )
        } else {
            return null;
        }
    }
    

  return (
    
    <Form className='container form' onSubmit={handleSignup}>
        <Form.Group controlId='fullName' className='form-group'>
            <Form.Label>Full Name:</Form.Label>
            <Form.Control
                autoComplete='off'
                type='text'
                placeholder='Ex. John Doe' 
                value={fullName}
                onChange={e => setFullName(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId='email' className='form-group'>
            <Form.Label>Email:</Form.Label>
            <Form.Control
                autoComplete='off'
                type='email'
                placeholder='Email' 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId='username' className='form-group'>
            <Form.Label>Username:</Form.Label>
            <Form.Control
                autoComplete='off'
                type='text'
                placeholder='Username' 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>Password:</Form.Label>
            <Form.Control 
                type='password'
                placeholder='Password' 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button variant='submit' type="submit" style={{marginTop: "40px"}}>Sign Up</Button>
        </Form.Group>
    </Form>
  )
}

export default SignUp