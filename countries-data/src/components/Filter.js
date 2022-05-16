const Filter = props => {
    return(
        <div>
           find countries <input onChange= {event => props.setSearch(event.target.value)}/>
        </div>
    )
}

export default Filter;