import { useEffect } from "react"
import { useState } from "react"

const Countries=()=>{
    const [countriesData,setCountriesData]=useState([])
    useEffect((()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountriesData(data))
    }),[])
    return (
        <div>
            
        </div>
    )
}
export default Countries