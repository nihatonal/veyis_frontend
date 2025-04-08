import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


import './Success.css'
function Success() {
    return (
        <div className="success_wrapper">
            <IoMdCheckmarkCircleOutline className='success_icon' />
            <h2 >Talebiniz alınmıştır.</h2>
            <p>En kısa sürede size geri dönüş yapacağız.</p>

        </div>
    );
}

export default Success;