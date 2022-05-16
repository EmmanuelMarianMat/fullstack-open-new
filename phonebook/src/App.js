import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearch={setSearch}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newNumber={newNumber} setNewNumber={setNewNumber} newName={newName} setNewName={setNewName}/>
      <h2>Numbers</h2>
      <Persons persons={persons} term={search} setPersons={setPersons}/>
    </div>
  )
}

export default App