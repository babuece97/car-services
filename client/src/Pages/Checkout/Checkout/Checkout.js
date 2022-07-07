import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import {  toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId}=useParams();
    const [service]=useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order ={
             email:user.email,
            service:service.name,
            serviceId : serviceId,
            address :event.target.address.value,
            // tel phone: event.target.phone.value,
        }
        axios.post('http://localhost:5000/order',order)
        .then(response=>{
            // console.log(response);
            const {data}=response;
            if (data.insertedId){
                toast('Your Order is booked');
                event.target.reset();
            }
        })
    }
    // if (user){
    //     console.log(user);   
    // }
    return (  
        <div className='w-50 mx-auto'>
            <h2>Please  Order :{service.name}</h2>
            <h5> You have to pay($) :{service.price}</h5>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value = {user?.displayName} name ="name" placeholder = 'name' required readOnly disabled/>
                <br/>
                <input className='w-100 mb-2' type="email" name ={user?.email} placeholder = 'email' required/>
                <br/>
                <input className='w-100 mb-2' type="text" value = {service.name} name ="service" placeholder = 'service' required/>
                <br/>
                <input className='w-100 mb-2' type="text" name ="address" placeholder = 'Address' autoComplete='off' required/>
                <br/>
                <input  className='w-100 mb-2' type="text" name ="tel" placeholder = 'tel number' autoComplete='off' required/>
                <br/>
                <input  className='btn btn-primary'type="submit" value="Place Order"/>
            </form>

        </div>
    );
};

export default Checkout;