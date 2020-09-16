import {useContext, useEffect} from "react";

import useFetch from '../../hooks/UseFetch'
import {CurrentUserContext} from "../../context/currentUser";
import useLocalStorage from '../../hooks/UseLocalStorage';

const CurrentUserChecker = ({children}) => {
    const [{response}, doFetch] = useFetch('/user')
    const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);
    const [token] = useLocalStorage('token');
    console.log('currentUserState', currentUserState)
    useEffect(() => {

        if(!token){
            setCurrentUserState(state => ({
                ...state,
                isLoggedIn: false
            }))
            return
        }
        doFetch()
        setCurrentUserState(state => ({
            ...state,
            isLoading: true
        }))
    }, [token, setCurrentUserState, doFetch])

    useEffect(() => {
        if(!response) {
            return
        }
        setCurrentUserState(state => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user
        }))
    }, [response, setCurrentUserState])

    return children
}

export default CurrentUserChecker;