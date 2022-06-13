import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

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
      {message? <Notification message={message} error={error}/> : <Notification message={message} error={error}/> }
      <Filter setSearch={setSearch}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newNumber={newNumber} setNewNumber={setNewNumber} newName={newName} setNewName={setNewName} setMessage={setMessage} setError={setError}/>
      <h2>Numbers</h2>
      <Persons persons={persons} term={search} setPersons={setPersons} setMessage={setMessage} setError={setError}/>
    </div>
  )
}

export default App