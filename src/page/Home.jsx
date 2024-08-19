import { Link } from 'react-router-dom'
import SVG from '../assets/svg/undraw_connected_world_wuay.svg'

export default function Home() {
    return (
        <section className='w-full h-screen flex flex-col justify-center  items-center gap-4'>
            <article className='flex flex-col gap-2 justify-center items-center'>
                <img src={SVG} alt="world" className='w-80 h-80' />
                <h1 className='text-2xl uppercase text-gray-800 font-bold'>What is the country?</h1>
                <Link to={'/easy'} className='bg-blue-950 text-white font-semibold p-2 rounded w-32 text-center text-xs transition-all hover:bg-blue-900'>Easy</Link>
                <Link to={'/normal'} className='bg-blue-950 text-white font-semibold p-2 rounded w-32 text-center text-xs transition-all hover:bg-blue-900'>Normal</Link>
                <Link to={'/hard'} className='bg-blue-950 text-white font-semibold p-2 rounded w-32 text-center text-xs transition-all hover:bg-blue-900'>Hard</Link>
                <Link to={'/countries'} className='bg-blue-950 text-white font-semibold p-2 rounded w-32 text-center text-xs transition-all hover:bg-blue-900'>Countries</Link>
                <Link to={'/rules'} className='bg-blue-950 text-white font-semibold p-2 rounded w-32 text-center text-xs transition-all hover:bg-blue-900'>Rules</Link>
            </article>
            <article>
                <p className='text-xs font-medium text-gray-700'>By: Luis Angel Fernández Concepción</p>
            </article>
        </section>
    )
}
