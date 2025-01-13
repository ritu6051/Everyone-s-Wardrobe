import React, { useEffect, useState } from 'react';


const Accessories = () => {
    const [users, setUsers] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5000/users')
                .then(res => res.json())
                .then(data => setUsers(data))
        }, []);

    return (                    
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Material</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                            <tr>
                                <th>{user.name}</th>
                                <td>{user.color}</td>
                                <td>{user.material}</td>
                                <td>{user.size}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div> 
    );
};
export default Accessories;