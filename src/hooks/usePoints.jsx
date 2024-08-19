import { useState } from "react"
export const usePoints = () => {
    const [points, setPoints] = useState(0)
    const incrementPoints = () => setPoints((points) => points + 1)

    return{
        incrementPoints,
        points
    }
}