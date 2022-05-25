import axios from "axios"
import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const displayName = user?.user?.displayName
        const currentUser = {email , displayName}
        if(email){
            axios.put(`http://localhost:4000//user/${email}`, currentUser)
            .then(data =>{
                localStorage.setItem('accessToken', data.data.token)
                setToken(data.data.token)
            })
        }
    },[user])
    return [token]
}

export default useToken