
import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import initialContacts from './data/contacts.json'

function App() {
  
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("newContacts"));
    return savedContacts || initialContacts;
  });
  
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    localStorage.setItem("newContacts", JSON.stringify(contacts));
  }, [contacts]);

  // Колбек-функція для обробки ContactForm сабміту форми
  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return ([
      ...prevContact,
      newContact
      ])
    })
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    })
  }

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterName.toLowerCase())
  })


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onContact={addContact} />
      <SearchBox value={filterName} onFilter={setFilterName} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App
