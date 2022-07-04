import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const Checkout = () => {
    const {serviceId}=useParams();
    const [service]=useServiceDetail(serviceId);
    return (  
        <div className='w-50 mx-auto'>
            <h2>Please  Order :{service.name}</h2>
            <h5> You have to pay($) :{service.price}</h5>
            <form>
                <input type="text" name ="name" placeholder = 'name' required/>
                <input type="text" name ="email" placeholder = 'email' required/>
            </form>

        </div>
    );
};

export default Checkout;