import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import TileView from '../TileView/TileView';
import Users from '../Users/Users';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const [query, setQuery] = useState('');
    const [gender, setGender] = useState('');
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch(`https://randomuser.me/api/?results=50&gender=${gender}`)
            .then(res => res.json())
            .then((result) => {
                setUsers(result.results);
                // setusers(result.results);
                setLoading(false);
            })
    }, [gender])

    // Get current users
    const indexOfLastPost = currentPage * usersPerPage;
    const indexOfFirstPost = indexOfLastPost - usersPerPage;
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }



    return (
        <div className="container">
            <h2>User List</h2>

            {/* {gender} */}
            <Search getQuery={(q) => setQuery(q)} />

            <div className="filter-section d-flex justify-content-between">
                <div className="radios">
                    <span>Filter by: </span>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="" onChange={e => setGender(e.target.value)} />
                        <label className="form-check-label" for="inlineRadio1">All</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="male" onChange={e => setGender(e.target.value)} />
                        <label className="form-check-label" for="inlineRadio2">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="female" onChange={e => setGender(e.target.value)} />
                        <label className="form-check-label" for="inlineRadio3">Female</label>
                    </div>
                </div>

                <div className="form-check form-switch">
                    <span className="form-check-label" for="flexSwitchCheckDefault">Tile View</span>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggler} />
                </div>
            </div>




            {/* <h1>{users.length}</h1> */}

            {/* <table className="table table-bordered table-hover">
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
            </table> */}

            {
                toggle ? <TileView users={currentUsers} loading={loading} /> : <Users users={currentUsers} loading={loading} />
            }


            <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />


            {/* <div className="d-flex justify-content-end">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> */}
        </div>
    );
};

export default Home;