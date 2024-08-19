import { useEffect, useState } from 'react'
import EndGame from '../components/EndGame';
import { useRandomIndex } from '../hooks/useRandomIndex';
import { usePoints } from '../hooks/usePoints';
import { useLevel } from '../hooks/useLevel';
import { getCountries } from '../api/country';
import BackHome from '../components/BackHome';
import { useLoader } from '../hooks/useLoader';
import Loader from '../components/Loader';
import { Toaster, toast } from 'react-hot-toast';

export default function GameNormal() {
    //states
    const [countrys, setCountrys] = useState([]);
    const [countryName, setCountryName] = useState('')
    //custom hooks
    const { level, nextLevel } = useLevel()
    const { points, incrementPoints } = usePoints()
    const { generateIndex, randomIndex } = useRandomIndex()
    const loader = useLoader()

    //Functions
    const getCountrysFromApi = async () => {
        try {
            const { data } = await getCountries()
            setCountrys(data)
            generateIndex()
        } catch (error) {
            console.error(error.message)
        }
    }

    //life cycle
    useEffect(() => {
        getCountrysFromApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    //handles events
    const handleChange = (e) => {
        setCountryName(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (countrys[randomIndex].name.common.toLowerCase() === countryName) {
            toast('Good Job!', {
                icon: '👏',
            });
            incrementPoints()
        } else toast.error(`Incorrect this is ${countrys[randomIndex].name.common}`)
        nextLevel()
        generateIndex()
        setCountryName('')
    }

    return (
        <section className='w-full h-screen flex flex-col gap-4  justify-center items-center'>
            {loader ? <Loader /> : <article>
                {level !== 31 ?
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center'>
                        <h3 className='font-semibold text-xl text-gray-700'> Normal Level: {level}/30</h3>
                        <h2 className='text-2xl uppercase text-gray-800 font-semibold'>What is the country?</h2>
                        {countrys.length > 0 ? <img src={countrys[randomIndex].flags.png} alt={countrys[randomIndex].name.common} className='w-80 h-52 p-2 border-2 border-blue-950 border-dashed rounded' /> : ''}
                        <input type="text" placeholder='Insert the name of this country' value={countryName} onChange={handleChange} className='p-2 border outline-none rounded w-[80%] text-xs focus:border-2 focus:border-blue-600 transition-all' />
                        <button className='w-[80%] bg-blue-800 text-white text-xs uppercase font-semibold p-2 rounded transition-all hover:bg-blue-700 flex gap-2 justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            save</button>
                        <BackHome />
                    </form>
                    : <EndGame points={points} limit={30} />}
            </article>}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </section>
    )
}
