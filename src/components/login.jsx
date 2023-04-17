import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app)


const Login = () => {
    const [error, setError]= useState('')
    const [success, setSuccess]= useState('')

    const formHandler =(event)=>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email,password)
    

        signInWithEmailAndPassword(auth,email,password)
        .then(res=> {
            const loggedUser = res.user
            console.log(loggedUser);
            setSuccess('user logged successfully')
            setError('')
        })
        .then(error=>{
            console.log(error);
        })
       
    }
    return (
        <div>
            <form onSubmit={formHandler} className='w-25 mx-auto'>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        name='email'
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        name='password'
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        required
                         
                    />
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                </div>
                <p>No account ? please <Link to="/signup">sign up</Link></p>
                <p>Forget password ? {}</p>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;