import React from 'react';
import { SpinnerRoundOutlined } from 'spinners-react';

const Loading = () => {
    return (
        <div className='flex justify-center py-24'>
            <SpinnerRoundOutlined size={80} thickness={100} speed={100} color="rgba(57, 172, 156, 1)" />
        </div>
    );
};

export default Loading;