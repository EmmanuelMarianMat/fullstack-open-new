const Filter = props => {
    return(
        <div>
           find countries <input value={props.search} onChange= {event => props.setSearch(event.target.value)}/>
        </div>
    )
}

export default Filter;