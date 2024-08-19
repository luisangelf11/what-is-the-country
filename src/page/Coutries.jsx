import BackHome from "../components/BackHome"
import CardCountry from "../components/CardCountry"
import Loader from "../components/Loader"
import { useCountries } from "../hooks/useCountries"
import { useLoader } from "../hooks/useLoader"

export default function Coutries() {
  const { countries } = useCountries()
  const loader = useLoader()
  return (
    <section className="flex flex-col gap-2 w-full items-center">
      <h2 className="uppercase text-2xl text-blue-900 p-2 font-semibold">list of Countries</h2>
      <BackHome />
      {
        loader ? <div className="mt-4">
          <Loader />
        </div> : <article className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-2">
          {countries.map((el, index) => <CardCountry key={index} name={el.name.common} image={el.flags.png} />)}
        </article>
      }
    </section>
  )
}
