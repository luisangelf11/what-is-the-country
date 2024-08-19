/* eslint-disable react/prop-types */
import SVG from '../assets/svg/undraw_quiz_re_aol4.svg'
import BackHome from './BackHome'
export default function EndGame({ points, limit }) {
    return (
        <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
            <img src={SVG} alt="endGame" className='w-52 h-52' />
            <p className='text-gray-800'><span className='font-semibold'>Total points:</span> {points}/{limit}</p>
            <button onClick={() => window.location.reload()} className='w-52 bg-green-800 text-white text-xs uppercase font-semibold p-2 rounded transition-all hover:bg-green-700 flex justify-center gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>

                Restart</button>
                <BackHome/>
        </div>
    )
}
