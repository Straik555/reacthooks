import React, {useEffect, useState} from "react";

import {ArticleFormBanner} from './style';
import BackendErrorMessages from '../../components/BackendErrorMessages';

const ArticleForm = ({onSubmit, error, initialValues}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [description, setDescription] = useState('');
    const [tagList, setTagList] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        const article = {
            title,
            body,
            description,
            tagList: [tagList]
        }
        onSubmit(article)
    }


    useEffect(() => {
        if(!initialValues){
            return
        }
        setTitle(initialValues.title);
        setBody(initialValues.body);
        setDescription(initialValues.description);
        setTagList(initialValues.tagList.join(' '));
    }, [initialValues])

    return(
        <ArticleFormBanner>
            {error && <BackendErrorMessages backendErrors={error} />}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input
                        type='text'
                        placeholder='Article title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className='input_title'
                    />
                </fieldset>
                <fieldset>
                    <input
                        type='text'
                        placeholder='What is this article about?'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <textarea
                        rows='8'
                        placeholder='Write your article (in markdown)'
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <input
                        type='text'
                        placeholder='Enter tags'
                        value={tagList}
                        onChange={e => setTagList(e.target.value)}
                    />
                </fieldset>
                <div className='form_button'>
                    <button type='submit'>
                        Publish Article
                    </button>
                </div>
            </form>
        </ArticleFormBanner>
    )
}

export default ArticleForm;