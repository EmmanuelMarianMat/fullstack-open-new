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
            return person.name.toLowerCase().includes(props.term.toLowerCase())?<p key={person.name}>{person.name} {person.number} <Button text="delete" handleClick={
              (event) => {
                if(window.confirm("Are you sure?"))
                {
                  personService.deleteObj(person.id)
                  .then(
                    response => {
                      props.setPersons(props.persons.filter(n => n.id !== person.id))
                      props.setMessage(`Deleted ${person.name}`)
                      props.setError(false)
                      setTimeout(() => {
                        props.setMessage(null)
                      }, 5000)
                    }
                  )
                  .catch(
                    error => {
                      console.log(error)
                      props.setMessage(error.message)
                      props.setError(true)
                      setTimeout(() => {
                        props.setMessage(null)
                      }, 5000)
                    }
                  )
                }
              }
            } /></p>:null;
        })}
      </>
    )
}

export default Persons;