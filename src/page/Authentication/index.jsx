import React, {useEffect, useState, useContext} from "react";

import {Redirect} from "react-router-dom";

import useFetch from './../../hooks/UseFetch';
import useLocalStorage from '../../hooks/UseLocalStorage';
import {
    Banner,
    FormBody,
    Title,
    Text,
    Fieldset
} from './style';
import {CurrentUserContext} from "../../context/currentUser";
import BackendErrorMessages from './components/BackendErrorMessages';

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
    const [, setToken] = useLocalStorage('token')
    const [, setCurrentUserState] = useContext(CurrentUserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
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
        setCurrentUserState(state => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user
        }))
    }, [response, setToken, setCurrentUserState])

    if(isSuccessfullSubmit) {
        return <Redirect to='/' />
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
                            {error && <BackendErrorMessages backendErrors={error.errors} />}
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