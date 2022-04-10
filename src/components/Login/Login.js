import React from 'react';
import { Link} from 'react-router-dom';
import './Login.css';
const Login = () => {
    
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
               <p className='create-account'>New to ema-john? <Link  className='form-link' to='/signup'>Create a new account</Link></p>
                <div className="or">
                    <div className="line"></div>
                    <p className='  '>OR</p>
                    <div className="line"></div>
                </div>
                <button className='sign-in-with-google'>Continue With Google</button>

            </div>
        </div>
    );
};

export default Login;