import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageUsers = () => {
    const [user] = useAuthState(auth);
    console.log(user.name)
    

    return (
        <div className='px-10 pt-6'>
            <h1 className='text-2xl text-teal-400 pb-6'>Manage Users</h1>
            <p>Current account: {user.email}</p>
        </div>
    );
};

export default ManageUsers;