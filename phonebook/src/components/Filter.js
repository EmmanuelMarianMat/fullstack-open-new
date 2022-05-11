const Filter = props => {
    return(
        <div>
            <input onChange= {event => props.setSearch(event.target.value)}/>
        </div>
    )
}

export default Filter;