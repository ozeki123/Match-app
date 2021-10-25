import React from 'react';
import './login.scss'

const Login = () => {
    return (
        <div className="login-container">
            <img/>
            <div className="login-contents">
                <h1>Sign in to Match</h1>
                <form>
                    <input placeholder="Username or email"/>
                    <input placeholder="Enter your password"/>
                </form>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Login;
