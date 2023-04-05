import React from 'react'
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import "./styles.css"

const Form = () => {
  return (
    <div className='container form-parent'>
        <div className='container form-children'>
            <Tabs 
                defaultActiveKey="login"
                id="justify-tab"
                className='mb-3 fill-tab'
                fill
            >
                <Tab eventKey="login" title="Login">
                    <Login />
                </Tab>
                <Tab eventKey="signup" title="Sign Up">
                    <SignUp />
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Form
