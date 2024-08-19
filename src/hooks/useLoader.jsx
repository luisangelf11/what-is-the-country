import { useEffect } from "react"
import { useState } from "react"

export const useLoader =()=>{
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        }, 3000)
    }, [])

    return loader;
}