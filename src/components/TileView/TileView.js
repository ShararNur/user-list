import React from 'react';
import './TileView.css'

const TileView = ({ users, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {users.map((user) =>
                <div className="col">
                    <div className="user-card w-50 d-flex">
                        <div>
                            <img src={user.picture.medium} className="rounded-circle m-4 h-50" alt="..." />
                        </div>
                        <div className="mt-3">
                            <h6>{user.name.last}, {user.name.first}</h6>
                            <p className="text-muted">{user.email}</p>
                            <p>{user.login.username}</p>
                            <p>{user.registered.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TileView;