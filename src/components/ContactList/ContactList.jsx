
import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { selectContacts } from "../../redux/contactsSlice"

const ContactList = () => { 
  
  const contacts = useSelector(selectContacts)

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
          <Contact
              contact={contact}
             
            />
          </li>
        ))}
    </ul>
  )
}

export default ContactList;