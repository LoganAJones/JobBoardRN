import { useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
        query: { ...query }
    },
    headers: {
        'X-RapidAPI-Key': '6866ff0788msh63bf303f7eb6919p1f3f56jsn1c15d8e29d28',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options);
            console.log(response.data.data);
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an Error')
        } finally {
            setIsLoading(falses)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { 
        data,
        isLoading,
        error, 
        refetch
    }
}

export default useFetch
