import React from 'react'
import { useState, useEffect } from 'react'
export const useFetch = (apipath , queryterm="",page=1) => {
    const [data, setData] = useState([])
    const API_KEY = import.meta.env.VITE_APP_API_KEY
    
    const apidata = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                   
                    Authorization: `Bearer ${API_KEY}`
                }
            }
          
         

            const response = await fetch(`https://api.themoviedb.org/3/${apipath}?query=${queryterm}&page=${page}`, options)
            const data = await response.json()
            setData(data.results)


        } catch {
            console.log("no data to fetch");

        }
    }

    useEffect(() => {
        apidata()
    }, [apipath,page,queryterm])

    return { data }
}

