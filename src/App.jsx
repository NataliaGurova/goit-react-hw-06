
import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
// import initialContacts from './data/contacts.json' //переносимо в store
// import { useDispatch } from 'react-redux'

function App() {
  // const dispatch = useDispatch()
  // // Перенесли в ContactList
  // const contacts = useSelector((state) => state.contacts)
 
  
  
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("newContacts"));
  //   return savedContacts || initialContacts;
  // });
  
  const [filterName, setFilterName] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("newContacts", JSON.stringify(contacts));
  // }, [contacts]);

  // Колбек-функція для обробки ContactForm сабміту форми
  //======================
        // переносимо у ContactForm
  // const addContact = (newContact) => {
  //   const action = {
  //     type: "contacts/addContact",
  //     payload: newContact,
  //   }
  //   dispatch(action);
    
  // };
//===========================
  // const deleteContact = (id) => {
  //   dispatch({
  //     type: "contacts/deleteContact",
  //     payload: id,
  //   });
  // }

  // const visibleContacts = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filterName.toLowerCase())
  // })


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filterName} onFilter={setFilterName} />
      <ContactList />
    </div>
  )
}

export default App


// import { Layout } from './Layout/Layout';
// import { AppBar } from './AppBar/AppBar';
// import { TaskForm } from './TaskForm/TaskForm';
// import { TaskList } from './TaskList/TaskList';

// export const App = () => {
//   return (
//     <Layout>
//       <AppBar />
//       <TaskForm />
//       <TaskList />
//     </Layout>
//   );
// };
