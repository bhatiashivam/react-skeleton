import React, { useState, useEffect } from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';

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
                <div className="skeleton-profile">
                    <div className="profile-item avatar">
                        <Avatar alt="shivam bhatia" />
                    </div>
                    <div className="profile-item text">
                        <h3 className="profile-name">{profile.name}</h3>
                        <p className="email">{profile.email}</p>
                        <a href={profile.website}>{profile.website}</a>
                    </div>
                </div>
            )}

            {!profile && (
                <div className="skeleton-profile">
                    <div className="profile-item avatar">
                        <Skeleton
                            animation="wave"
                            variant="circle"
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className="profile-item text">
                        <Skeleton
                            className="avatar"
                            animation="wave"
                            height={15}
                            width="50%"
                            style={{ marginBottom: 6 }}
                        />
                        <Skeleton
                            className="text"
                            animation="wave"
                            height={10}
                            width="100%"
                        />
                        <Skeleton
                            className="text"
                            animation="wave"
                            height={10}
                            width="80%"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;
