import CountryDetails from "./CountryDetails"

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const Countries = props => {
    if(props.filtered.length > 10){
        return(
            <>Too many matches. Specify another filter</>
        )
    }
    else if(props.filtered.length === 0){
        return(
            <>No matches. Specify another filter</>
        )
    }
    else if(props.filtered.length>1){
        return(
            <>
                {props.filtered.map((country, i) => <p key={country.key}>{country.name}<Button text="show" handleClick={()=>{props.setSearch(country.name)}}/></p>)}
            </>
        )
    }
    console.log(props.filtered[0])
    return(
        <CountryDetails country={props.filtered[0]} />
    )
        
}

export default Countries;