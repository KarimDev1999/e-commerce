import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../redux/actions/auth';
import { UserTopProfilePopup } from '../styles/components/User';


const UserPopup: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <UserTopProfilePopup >
            <ul>
                <li onClick={() => history.push('/profile')}>
                    Profile
                </li>
                <li onClick={() => dispatch(logout())}>
                    Logout
                </li>
            </ul>
        </UserTopProfilePopup>
    )
}

export default UserPopup
