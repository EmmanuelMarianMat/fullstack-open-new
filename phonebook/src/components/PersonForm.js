import personService from '../services/persons'
const PersonForm = props => {
    const persons = props.persons;
    const setPersons = props.setPersons;
    const newName = props.newName;
    const setNewName = props.setNewName;
    const newNumber = props.newNumber;
    const setNewNumber = props.setNewNumber;
    const setMessage = props.setMessage;
    const setError = props.setError;
  
    const handleSubmit  = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if(newName===''){
        alert('Please enter a name');
      }
      else if(newNumber===''){
        alert('Please enter a number');
      }
      else{
        let index = -1;
        for(let i=0; i<persons.length; i++) {
          if(persons[i].name === newName){
            index = i;
            i = persons.length;
          }
        }
    
        if(index!==-1) {
          if(window.confirm(`${newName} already exixts in the phonebook. Replace old number with the new one?`)){
            personService
              .update(persons[index].id, {name: newName, number: newNumber})
              // .catch(error => {
              //   setError(error)
              // })
              .then(response => {
                let dup = [...persons]
                dup[index].number = newNumber;
                setPersons(dup)
                setMessage(`Updated ${newName}`)
                setError(false)
                setTimeout(() => {
                  setMessage(null)
                }, 5000)
              })
          }
          setNewName('')
          setNewNumber('')
          event.target.reset()
        }
        else{
          const newPerson = {name: newName, number: newNumber}
          personService
            .create(newPerson)
            .then(response => {
              console.log(response)
              newPerson.id = response.data.id
              setPersons(persons.concat(newPerson))
              setMessage(`Added ${newName}`)
              setError(false)
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
          
          setNewName('')
          setNewNumber('')
          event.target.reset()
        }
      }
    }
  
    return(
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={event => setNewName(event.target.value)}/>
        </div>
        <div>number: <input onChange={event => setNewNumber(event.target.value)}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;