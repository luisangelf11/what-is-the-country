import { getCountries } from "../api/country";
import { useEffect, useState } from "react";

export const useCountries = ()=>{
    const [countries, setCountries] = useState([]);

    const getDataApi = async()=>{
        try {
            const {data} = await getCountries()
            setCountries(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getDataApi()
    }, [])

    return {
        countries
    }
}