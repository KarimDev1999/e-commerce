import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { login } from '../redux/actions/auth'
import { FormStyled, FormWrapper } from '../styles/components/Form'

const Login = () => {
    const email = useInput('');
    const password = useInput('');
    const dispatch = useDispatch();
    const { isAuth } = useTypedSelector(({ auth }) => auth);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.value || !password.value) {
            alert('all fields are required');
            return
        }
        const user = { email: email.value, password: password.value }
        dispatch(login(user))
    };

    if (isAuth) {
        return <Redirect to='/' />
    }
    return (
        <FormWrapper>
            <h1>Login</h1>
            <FormStyled onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input {...email} name='email' id='email' type="text" />
                <label htmlFor="password">Password</label>
                <input {...password} name='password' id='password' type="text" />
                <input type="submit" value='log in' />
            </FormStyled>
            <span>don`t have an account <Link style={{ color: 'navy' }} to='/register'>Register</Link></span>
        </FormWrapper>
    )
}

export default Login
