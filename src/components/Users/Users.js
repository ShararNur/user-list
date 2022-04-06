import React from 'react';

const Users = ({ users, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <table className="table table-bordered table-hover">
            <thead className="table-light">
                <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">Registration Date</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>

                {users.map(user => <tr>
                    <td>
                        <div className="d-flex">
                            <img src={user.picture.medium} class="rounded-circle me-4" alt="..."></img>

                            <div className="mt-2">
                                <h6>{user.name.last}, {user.name.first}</h6>
                                <p className="text-muted">{user.email}</p>
                            </div>

                        </div>
                    </td>
                    <td>{user.registered.date}</td>
                    <td>{user.login.username}</td>
                </tr>)}
            </tbody>
        </table>
    );
};

export default Users;