import React from "react";
import {Link} from "react-router-dom";

import {
    FeedBanner,
    FeedContainer,
    FeedContainerImg,
    FeedContainerUser,
    FeedContainerUsername,
    FeedContainerLike
} from './style';
import TagList from "../TagList";
import AddToFavorite from "../AddToFavorite";

const Feed = ({articles}) => {

    return (
        <FeedBanner>
            {articles.map((article, index) => {
                return (
                    <FeedContainer key={index}>
                        <FeedContainerImg>
                            <FeedContainerUser>
                                <Link to={`/profiles/${article.author.username}`}>
                                    <img src={article.author.image} alt='' />
                                </Link>
                                <FeedContainerUsername>
                                    <Link to={`/profiles/${article.author.username}`} className='username-link'>
                                        {article.author.username}
                                    </Link>
                                    <span>{new Date(article.createdAt).toLocaleString()}</span>
                                </FeedContainerUsername>
                            </FeedContainerUser>
                            <FeedContainerLike>
                                <>
                                    <AddToFavorite
                                        isFavorited={article.favorited}
                                        favoriteCount={article.favoritesCount}
                                        articleSlug={article.slug}
                                    />
                                </>
                            </FeedContainerLike>
                        </FeedContainerImg>
                        <Link to={`/articles/${article.slug}`} className='preview-link'>
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <div className='preview-link-ul'>
                                <span>Read more...</span>
                                <TagList tags={article.tagList} justify='true' width='50%'/>
                            </div>
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