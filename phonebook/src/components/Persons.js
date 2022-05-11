const Persons = props => {

    return(
      <>
        {props.persons.map((person, i) =>{
            return person.name.toLowerCase().includes(props.term.toLowerCase())?<p key={person.name}>{person.name} {person.number}</p>:null;
        })}
      </>
    )
}

export default Persons;