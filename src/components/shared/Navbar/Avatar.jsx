import React from 'react';
import avaterImg from '../../../assets/images/placeholder.jpg';
const Avatar = () => {
    return (
        <div>
            <img src={avaterImg} width={30} height={30}  alt="profile" className='rounded-full' />
        </div>
    );
};

export default Avatar;