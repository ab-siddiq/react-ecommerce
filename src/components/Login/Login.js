import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, {replace:true});
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
      const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div className="">
                <h2 className='form-title'>Login</h2>
                <form action="" onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="">E-mail</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
                    </div>
                    <input className='form-submit cursor-pointer' type="submit" value="Login" />
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