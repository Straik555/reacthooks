import React from "react";
import {Link} from "react-router-dom";

import {
    FeedBanner,
    FeedContainer,
    Img,
    FeedContainerImg,
    FeedContainerUser,
    FeedContainerUsername,
    FeedContainerLike,
    FeedLike,
    FeedImg
} from './style';

const Feed = ({articles}) => {

    return (
        <FeedBanner>
            {articles.map((article, index) => {
                return (
                    <FeedContainer key={index}>
                        <FeedContainerImg>
                            <FeedContainerUser>
                                <Link to={`/profiles/${article.author.username}`}>
                                    <Img src={article.author.image} alt='' />
                                </Link>
                                <FeedContainerUsername>
                                    <Link to={`/profiles/${article.author.username}`} className='username-link'>
                                        {article.author.username}
                                    </Link>
                                    <span>{new Date(article.createdAt).toLocaleString()}</span>
                                </FeedContainerUsername>
                            </FeedContainerUser>
                            <FeedContainerLike>
                                <FeedLike>
                                    <FeedImg />
                                    <span>0</span>
                                </FeedLike>
                            </FeedContainerLike>
                        </FeedContainerImg>
                        <Link to={`articles/${article.slug}`} className='preview-link'>
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <span>Read more...</span>
                            <ul>
                                {article.tagList.map(tag => {
                                    return (
                                        <li key={tag}>
                                            {tag}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Link>
                        <div>


                        </div>
                    </FeedContainer>
                )
            })}
        </FeedBanner>
    )
}

export default Feed;