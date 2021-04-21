import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const Articles = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    setArticles(data);
                })
                .catch((error) => {
                    console.error('Failed! Could not fetch posts', error);
                });
        }, 3000);
    }, []);

    return (
        <div className="articles">
            <h2>Articles</h2>
            {articles &&
                articles.map((article) => (
                    <div className="article" key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                ))}

            {!articles &&
                [1, 2, 3, 4, 5].map((value) => {
                    return (
                        <div key={value}>
                            <Typography variant="h3" key={value}>
                                <Skeleton animation="pulse"></Skeleton>
                            </Typography>
                            <Typography variant="body1" key={value}>
                                <Skeleton animation="wave"></Skeleton>
                            </Typography>
                            <Typography variant="body1" key={value}>
                                <Skeleton animation="wave"></Skeleton>
                            </Typography>
                        </div>
                    );
                })}

            {/* <Skeleton variant="rect" width={210} height={118} /> */}
        </div>
    );
};

export default Articles;
