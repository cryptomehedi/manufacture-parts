import { useEffect, useState } from "react";
import axiosPrivate from "../Api/Axios";

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    
    useEffect(() =>{
        if(user){
            const {email} = user;
            axiosPrivate.get(`http://localhost:4000//admin/${email}`)
            .then(data=>{
                setAdmin(data?.data)
                setAdminLoading(false)
                })
        }
    },[user])
    return [admin, adminLoading]
}

export default useAdmin