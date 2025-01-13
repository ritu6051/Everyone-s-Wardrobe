import React, { useEffect, useState } from 'react';


const Accessories = () => {

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
                    {/* <tbody>
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
                    </tbody> */}
                </table>
            </div> 
    );
};
export default Accessories;