import {useEffect, useState, useCallback} from "react";
import axios from "axios";

import useLocalStorage from '../UseLocalStorage';


export default url => {
    const baseUrl = 'https://conduit.productionready.io/api'
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({})
    const [token] = useLocalStorage('token')

    const doFetch = useCallback((options = {}) => {
        setOptions(options);
        setIsLoading(true);
    }, [])
    useEffect(() => {
        const requestOption = {
            ...options,
            ...{
                headers: {
                    authorization: token ? `Token ${token}` : ''
                }
            }
        }
        if(!isLoading){
            return
        }
        axios(baseUrl + url, requestOption)
            .then(res => {
                console.log('sucess', res)
                setIsLoading(false)
                setResponse(res.data)
            })
            .catch(err => {
                console.log('error', err)
                setIsLoading(false)
                setError(err.response.data)
            })
    }, [isLoading, url, options, token])
    return [{isLoading, response, error}, doFetch]
}