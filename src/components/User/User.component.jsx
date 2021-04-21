import React, { useState, useEffect } from 'react';

const User = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users/4')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    setProfile(data);
                })
                .catch((error) => {
                    console.error('User data could not be fetched: ', error);
                });
        }, 4000);
    }, []);

    return (
        <div className="user">
            <h2>User Details</h2>
            {profile && (
                <div className="profile">
                    <h3>{profile.name}</h3>
                    <p className="email">{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            )}

            {!profile && <div>Loading...</div>}
        </div>
    );
};

export default User;
