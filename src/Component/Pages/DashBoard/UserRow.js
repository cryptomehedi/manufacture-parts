import React from 'react';
// import axiosPrivate from '../../Api/axiosPrivate';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/Axios';

const UserRow = ({user , refetch, index}) => {
    // const {index} = index;
    let {email, role} = user;

    const makeAdmin = () => {
        const role = 'admin'
        const position = {role}

        axiosPrivate.put(`https://manufacture-parts.herokuapp.com/user/admin/${email}`,position)
        .then(data => {
            console.log(data?.data?.result?.modifiedCount);
            if(data?.data?.result?.modifiedCount){
                refetch()
                toast.success(`Congratulations ${email} . Now you are an admin`)
            }
            else{
                toast.error('Failed to make an admin')
            }
        })
    }

    const removeAdmin = () => {
        const role = ''
        const position = {role}

        axiosPrivate.put(`https://manufacture-parts.herokuapp.com/user/admin/${email}`,position)
        .then(data => {
            console.log(data?.data?.result?.modifiedCount);
            if(data?.data?.result?.modifiedCount){
                refetch()
                toast.success(`Sorry ${email} . Now you are an user`)
            }
            else{
                toast.error('Failed to make an user')
            }
        })
    }

    return (
        <tr className="hover">
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> }</td>
            <td><button onClick={removeAdmin} className="btn btn-xs">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;