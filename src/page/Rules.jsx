import SVG from '../assets/svg/undraw_video_game_night_8h8m.svg'
import BackHome from '../components/BackHome'

export default function Rules() {
    return (
        <section className='w-full h-screen flex flex-col justify-center items-center gap-4'>
            <img src={SVG} alt="rules" className='w-72 sm:w-96'/>
            <h2 className='text-2xl uppercase text-gray-950 font-semibold'>Rules</h2>
            <ul className='text-sm list-decimal w-[80%] sm:w-auto'>
                <li>You must guess the country by its flag and enter its name in English</li>
                <li>The flags will be displayed randomly</li>
                <li>The easy level contains 10 flags, the normal 30 and the hard 100</li>
            </ul>
            <BackHome />
        </section>
    )
}
