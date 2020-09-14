import React, {useEffect, useState} from "react";

import {BrowserRouter as Redirect} from "react-router-dom";

import useFetch from './../../hooks/UseFetch';
import useLocalStorage from '../../hooks/UseLocalStorage';
import {
    Banner,
    FormBody,
    Title,
    Text,
    Fieldset
} from './style';

const Authentication = props => {
    const isLogin = props.match.path === '/login';
    const pageTitle = isLogin ? 'Sign In' : 'Sign Up';
    const descriptionLink = isLogin ? '/register' : '/login';
    const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
    const apiUrl = isLogin ? '/users/login' : '/users';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)
    const [token, setToken] = useLocalStorage('token')

    console.log('fff', token)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('data', email, password, username);
        const user = isLogin ? {email, password} : {email, password, username};
        doFetch({
            method: 'post',
            data: {
                user
            }
        });
    }

    useEffect(() => {
        if(!response){
            return
        }
        setToken(response.user.token)
        setIsSuccessfullSubmit(true)
    }, [response])

    if(isSuccessfullSubmit) {
        return <Redirect to='/main' />
    }

    return (
        <div>
            <div>
                <Banner>
                    <FormBody>
                        <Title>{pageTitle}</Title>
                        <Text
                            to={descriptionLink}
                        >
                            {descriptionText}
                        </Text>
                        <form onSubmit={handleSubmit}>
                            {!isLogin && (
                                <Fieldset>
                                    <input
                                        type='text'
                                        placeholder='Username'
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </Fieldset>
                            )}
                            <Fieldset>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Fieldset>
                            <Fieldset>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Fieldset>
                            <Fieldset>
                                <button
                                    type='submit'
                                    disabled={isLoading}
                                >
                                    {pageTitle}
                                </button>
                            </Fieldset>
                        </form>
                    </FormBody>
                </Banner>
            </div>
        </div>
    )
}

export default Authentication;