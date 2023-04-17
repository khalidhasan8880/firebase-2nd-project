import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../firebase.init';

const auth = getAuth(app)


const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
  
    const registerHandler = (event) => {
        setError('')
        setSuccess('')
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            setError('Password will be Minimum  at least one uppercase letter, one lowercase letter')
            return
        }
        createUserWithEmailAndPassword(auth, email, password).then(result=>{
            const user  = result.user;
            console.log(user)
            setSuccess('user has been created successful');
            emailVerification(result.user)

        })
        .then(error=>console.log(error))
    }

const emailVerification= (user)=>{
    sendEmailVerification(user)
    .then(res=>{
        console.log(res);
        alert('please verify your email address ')
    })
    // .then(error=>{
    //     console.log(error);
    // })
}

    return (

        <div className='w-25 mx-auto'>
            <h1 className='text-4xl font-semibold'>Register</h1>
            <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-danger'>{error}</p>
            <p className='text-primary'>{success}</p>
            <p>already account please <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;