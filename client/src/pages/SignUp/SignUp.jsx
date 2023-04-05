import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            navigate("/");
        })
        .catch (error => console.error(error));

    }
    

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
            <label>
                Full Name:
                <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
            </label>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp