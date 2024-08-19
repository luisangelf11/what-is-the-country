import { useState } from "react"
export const useRandomIndex = ()=>{
    const [randomIndex, setRandomIndex] = useState(0)

    const generateIndex = () => {
        const newIndex = Math.floor(Math.random() * (249 + 0) - 0)
        setRandomIndex(newIndex)
    }

    return {
        randomIndex,
        generateIndex
    }
}