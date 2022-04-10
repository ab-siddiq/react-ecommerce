import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    const handleCreateNewAccount = () => {
        const path = '../signup';
        navigate(path);
    }
    return (
        <div className='form-container'>
            <div className="">
                <h2 className='form-title'>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="">E-mail</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
               <p className='create-account'>New to ema-john? <Link onClick={handleCreateNewAccount} className='form-link' to='signup'>Create a new account</Link></p>
            

            </div>
        </div>
    );
};

export default Login;