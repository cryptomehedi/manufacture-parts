import axios from "axios"
import { useEffect, useState } from "react"

const usePartDetails = productId =>{
    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/inventory/${productId}`)
        .then(data => setProductDetails(data.data))
    },[productId])
    return [productDetails, setProductDetails]
}

export default usePartDetails