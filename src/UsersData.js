import React, { useEffect, useState } from 'react';
import User from './User';
import Loading from './Loader';

const UsersData = () => {

    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const jsonResponse = await response.json();
        setUsers(jsonResponse['data']);
        console.log(jsonResponse['data']);
    }

    if (loading) {
        return (
            <>
                <Loading />
                <div>
                    {
                        setTimeout(() => {
                            setloading(false);
                        }, 1500)
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <h1>Users Data</h1>
            <div className="container-fluid mt-3">
                <div className="row text-center">
                    {
                        users.map((curUser, key) => {
                            return (
                                <User curUser={curUser} key={key} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UsersData;