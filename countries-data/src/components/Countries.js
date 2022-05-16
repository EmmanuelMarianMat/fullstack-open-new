import CountryDetails from "./CountryDetails"
import { useState } from "react"

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const Countries = props => {
    let filtered = []
    const [select, setSelect] = useState(false)
    for (const i in props.countries) {
        const country = props.countries[i]
        if(country.name.toLowerCase().includes(props.term.toLowerCase()))
            filtered.push(country)
    }
    if(filtered.length > 10){
        return(
            <>Too many matches. Specify another filter</>
        )
    }
    else if(filtered.length !== 1){
        return(
            <>
                {filtered.map((country, i) => <p key={country.key}>{country.name}<Button text="show" handleClick={()=>{setSelect(country)}}/></p>)}

                {select?<><CountryDetails country={select}/></>:null}
            </>
        )
    }
    else{
        return(
            <CountryDetails country={filtered[0]} />
        )
    }
}

export default Countries;