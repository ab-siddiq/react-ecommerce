import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [error, setError] = useState('');
    const handleNameBlur = e=> {
        setName(e.target.value)
    }
    const handlePhoneBlur = e=> {
        setPhone(e.target.value)
    }
    const handleAddressBlur = e=> {
        setAddress(e.target.value)
    }
    const handleShipping = () => {
        
    }
    return (
        <div className='form-container'>
        <div className="">
            <h2 className='form-title'>Shipping Information</h2>
            <form action="" onSubmit={handleShipping}>
                <div className="input-group">
                    <label htmlFor="">E-mail</label>
                    <input  type="email" name="" value={user?.email} readOnly id="" />
                </div>
                <div className="input-group">
                    <label htmlFor="">Name</label>
                    <input onBlur={handleNameBlur} type="text" name="" id="" />
                </div>
                <div className="input-group">
                    <label htmlFor="">Phone</label>
                    <input onBlur={handlePhoneBlur} type="text" name="" id="" />
                </div>
                <div className="input-group">
                    <label htmlFor="">Address</label>
                    <input onBlur={handleAddressBlur} type="password" name="" id="" />
                </div>
                <input className='form-submit cursor-pointer' type="submit" value="Add Shipping" />
            </form>
          
        </div>
    </div>
    );
};

export default Shipment;