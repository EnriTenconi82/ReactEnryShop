import React from 'react';

import './avatar.css';


const Avatar = ({ src, alt = 'item image' }) => {
    return (
        <div className="avatar">
            <img src={src} alt={alt} />
        </div>
    );
    };

    export default Avatar;
