const PersonForm = props => {
    const persons = props.persons;
    const setPersons = props.setPersons;
    const newName = props.newName;
    const setNewName = props.setNewName;
    const newNumber = props.newNumber;
    const setNewNumber = props.setNewNumber;
  
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
          alert(`${newName} already exists in phonebook`)
        }
        else{
          setPersons(persons.concat({name: newName, number: newNumber, id: persons.length+1}))
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