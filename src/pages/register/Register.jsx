import React from 'react'
import "./register.css"

const Register = () => {
    return (
        <div className='register'>
            <div className="registerWrapper">

                <div className="registerLeft">
                    <h1 className='registerLogo'>GuessBook</h1>
                    <span className='registerDesc'>
                        Connect with friends and the world around you on GuessBook.
                    </span>
                </div>

                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder='Username' className="registerInput" />
                        <input placeholder='Email' className="registerInput" />
                        <input placeholder='Password' className="registerInput" />
                        <input placeholder='Password Again' className="registerInput" />
                        <button className='registerButton'>Sign Up </button>
                        <button className="registerLoginButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register