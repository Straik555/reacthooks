import React, {useContext, useEffect, useState} from "react";
import {Redirect} from 'react-router-dom';

import useLocalStorage from '../../hooks/UseLocalStorage';
import useFetch from '../../hooks/UseFetch';
import {CurrentUserContext} from "../../context/currentUser";
import BackendErrorMessages from "../../components/BackendErrorMessages";
import {
    SettingsBanner,
    SettingsContainer
} from './style';

const Settings = () => {
    const [currentUserState, dispatch] = useContext(CurrentUserContext)
    const apiUrl = '/user';
    const [{response, error}, doFetch] = useFetch(apiUrl)
    const [, setToken] = useLocalStorage('token')
    const [image, setImage] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccessfullLogout, setIsSuccessfullLogout] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        doFetch({
            method: 'put',
            data: {
                user: {
                    ...currentUserState.currentUser,
                    image,
                    username,
                    bio,
                    email,
                    password
                }
            }
        })
    }

    const logout = (e) => {
        e.preventDefault()
        setToken('');
        dispatch({type: 'LOGOUT'});
        setIsSuccessfullLogout(true)
    }

    useEffect(() => {
        if(!currentUserState.currentUser) {
            return
        }

        setImage(currentUserState.currentUser.image);
        setUsername(currentUserState.currentUser.username);
        setBio(currentUserState.currentUser.bio);
        setEmail(currentUserState.currentUser.email);
    }, [currentUserState.currentUser])

    useEffect(() => {
        if(!response){
            return
        }
        dispatch({type: 'SET_AUTHORIZED', payload: response.user})
    }, [response, dispatch])

    if(isSuccessfullLogout){
        return <Redirect to='/' />
    }

    return (
        <SettingsBanner>
            <SettingsContainer>
                <h1>Your settings</h1>
                {error && <BackendErrorMessages backendErrors={error.errors}/>}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <input
                            type='text'
                            className='input_url'
                            placeholder='URL of profile picture'
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <textarea
                            type='text'
                            rows='8'
                            placeholder='Short bio'
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            type='text'
                            placeholder='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            type='password'
                            placeholder='New Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </fieldset>
                    <button
                        type='submit'
                        className='button_update'
                    >
                        Update Settings
                    </button>
                </form>
                <hr />
                <button
                    onClick={logout}
                    className='button_logout'
                >
                    Or click here to logout
                </button>
            </SettingsContainer>
        </SettingsBanner>
    )
}

export default Settings;