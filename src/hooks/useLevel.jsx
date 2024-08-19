import { useState } from 'react'
export const useLevel = () => {
    const [level, setLevel] = useState(1)

    const nextLevel = () => setLevel((level) => level + 1)
    return {
        level,
        nextLevel
    }
}