import { Link } from 'react-router-dom'

export default function BackHome() {
    return (
        <Link to='/' className='p-2 w-52 bg-gray-900 text-white rounded text-center transition-all hover:bg-gray-800 text-xs flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
            Back to menu</Link>
    )
}
