import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../Api/Axios';
// import axiosPrivate from '../../Api/Axios';
import Spinner from '../Shared/Spinner';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const {data : users, isLoading, refetch} = useQuery('userc', ()=> axiosPrivate.get('http://localhost:4000//user'))
    if(isLoading) {
        return <Spinner/>
    }
    console.log(users);
    return (
        <div>
            <h2 className='text-3xl'>Total Users {users.data.length}</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>SN</th>
                    <th>Email</th>
                    <th>Add</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.data.map((user,index) => <UserRow key={user._id} refetch={refetch} index={index} user={user} />)
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MakeAdmin;