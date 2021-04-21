import React, { useEffect, useState } from 'react';

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
            {!articles && <div>Loading...</div>}
        </div>
    );
};

export default Articles;
