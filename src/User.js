import React from 'react';

const User = ({ curUser, key }) => {
    return (
        <>
            <div className="col-10 col-md-4 userCard">
                <div class="card">
                    <div className="pic">
                        <img src={curUser.avatar} className="card-img-top" alt="..." />
                    </div>
                    <div className="info">
                        <h3>{curUser.first_name} {curUser.last_name}</h3>
                        <p className="card-text"> {curUser.email} </p>
                        <p> ID : {curUser.id} </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default User;