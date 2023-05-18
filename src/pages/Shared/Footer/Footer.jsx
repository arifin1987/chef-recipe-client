import React from 'react';
import { Fa500Px, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='m-4'>
            <div>
            <h1 className='text-xl font-bold'>Contact Information</h1>
            <p>Phone: 01234567</p>
            <p>Address: 27 Dhanmondi, Dhaka, Bangladesh</p>
            <p>E-mail: abc@gmail.com</p>
            <div className='bg-red-400 p-4 text-center text-white flex justify-between'>
            <p >All rights reserved 2023</p>
            <div className='flex '>
            <FaFacebook className='m-2'></FaFacebook>
            <FaInstagram className='m-2'></FaInstagram>
            <FaTwitter className='m-2'></FaTwitter>
            </div>
            
        
            </div>
            
            </div>
            
            
        </div>
    );
};

export default Footer;