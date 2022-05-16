import personService from "../services/persons";

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Persons = props => {
    return(
      <>
        {props.persons.map((person, i) =>{
            return person.name.toLowerCase().includes(props.term.toLowerCase())?<p key={person.name}>{person.name} {person.number} <Button text="delete" handleClick={(event) => {if(window.confirm("Are you sure?")){personService.deleteObj(person.id).then(props.setPersons(props.persons.filter(n => n.id !== person.id)))}}} /></p>:null;
        })}
      </>
    )
}

export default Persons;