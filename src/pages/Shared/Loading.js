import React from 'react';
import { createContext } from 'react';
import { SpinnerRoundOutlined } from 'spinners-react';
import './Loading.css'

const Loading = () => {

    return (
        <div className='loading-container py-40'>
            <SpinnerRoundOutlined  size={80} thickness={100} speed={100} color="rgba(57, 172, 156, 1)" />
        </div>
    );
};

export default Loading;