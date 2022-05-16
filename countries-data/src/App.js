import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState({})
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        let data_dup = []
        response.data.forEach(country => {
          if(country.capital===undefined){
            country.capital = ['unknown']
          }
          data_dup.push({
            name: country.name.common,
            key: country.name.official,
            languages: country.languages,
            flags: country.flags,
            population: country.population,
            capital: country.capital,
            area: country.area
          })
        });
        setCountries(data_dup)
      })
  }, [])
  // console.log(countries)
  return(
    <>
      <Filter setSearch={setSearch}/>
      <Countries term={search} countries={countries}/>
    </>
  )
}

export default App