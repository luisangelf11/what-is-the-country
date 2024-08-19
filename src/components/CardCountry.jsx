// eslint-disable-next-line react/prop-types
export default function CardCountry({ name, image }) {
    return (
        <div className="w-32 sm:w-60 flex flex-col justify-center items-center gap-2 p-2 border-dashed rounded border-2">
            <img src={image} alt={name} className="w-52" />
            <p className="text-sm font-semibold text-gray-800 text-left">{name}</p>
        </div>
    )
}
