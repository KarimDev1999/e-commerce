import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

const Profile = () => {
    const { currentUser, isAuth } = useTypedSelector(({ auth }) => auth);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>{currentUser?.username}</h1>
            <h1>{currentUser?.email}</h1>
        </div>
    )
}

export default Profile
