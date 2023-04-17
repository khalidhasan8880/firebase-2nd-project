import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.init';
import { Link } from 'react-router-dom';


const auth = getAuth(app)

const Login = () => {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const formHandler = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)



    }

    const resetPasswordHandler = () => {
        const email = emailRef.current.value
       if (!email) {
        alert('please give your email address')
        return
       }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                alert('please check your email')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
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
                        ref={emailRef}
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
                <p>Forget password ? <button onClick={resetPasswordHandler} className='btn btn-link'>Reset password</button></p>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;