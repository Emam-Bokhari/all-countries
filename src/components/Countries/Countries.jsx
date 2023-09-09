import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"

const Countries = () => {
    const [countriesData, setCountriesData] = useState([])
    useEffect((() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountriesData(data))
    }), [])
    return (
        <div>
            {
                countriesData.map(item => <Country key={item.cca2} data={item} />)
            }
        </div>
    )
}
export default Countries