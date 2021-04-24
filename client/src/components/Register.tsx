import React from 'react';
import useInput from '../hooks/useInput';
import { register } from '../redux/actions/auth';
import { FormStyled, FormWrapper } from '../styles/components/Form';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Register = () => {
    const username = useInput('');
    const email = useInput('');
    const password = useInput('');
    const dispatch = useDispatch();
    const { isAuth } = useTypedSelector(({ auth }) => auth);


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username.value || !email.value || !password.value) {
            alert('all fields are required')
            return
        }
        const user = { username: username.value, email: email.value, password: password.value }
        dispatch(register(user))
    }
    if (isAuth) {
        return <Redirect to='/' />
    }
    return (
        <FormWrapper>
            <h1>Register</h1>
            <FormStyled onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input {...username} name='username' id='username' type="text" />
                <label htmlFor="email">Email</label>
                <input {...email} name='email' id='email' type="text" />
                <label htmlFor="password">Password</label>
                <input {...password} name='password' id='password' type="text" />
                <input type="submit" value='Register' />
            </FormStyled>
        </FormWrapper>
    )
}

export default Register
