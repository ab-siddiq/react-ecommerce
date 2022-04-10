import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';

const Register = () => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/');
    }
    const handleNameBlur = event => {
      setName(event.target.value)
  }
    const handlePhoneBlur = event => {
      setPhone(event.target.value)
  }
    const handleEmailBlur = event => {
      setEmail(event.target.value)
  }
    const handlePasswordBlur = event => {
      setPassword(event.target.value)
  }
    const handleConfirmPasswordBlur = event => {
      setConfirmPassword(event.target.value)
  }
    const handleError = event => {
        setError();
        setSuccess('');
  }
    const handleSuccess = event => {
        setSuccess();
        setError('');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Confirm password not matched!')
        }
        createUserWithEmailAndPassword(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                
        })
    }
    return (
        <div className='form-container'>
            <div className="">
                <h2 className='form-title'>Sign Up</h2>
                <p>{ success}</p>  
                <p>{ error}</p>  
                <form action="" onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">E-mail</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="" />
                        <p className='error-message'>{error}</p>
                    </div>
                    <input className='form-submit cursor-pointer' type="submit" value="Login" />
                </form>
               <p className='create-account'>Already have an account? <Link  className='form-link' to='/login'>Login</Link></p>
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

export default Register;