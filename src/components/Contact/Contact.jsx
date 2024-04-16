import css from "./Contact.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";



const Contact = ({ contact, onDelete }) => { 
   const { id, name, number } = contact;
  return (
    <div className={css.item}>
      <div>
        <p className={css.iconName}><BsFillPersonFill size={20}/> {name}</p>
        <p><BsFillTelephoneFill /> {number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>

    </div>
  )
}

export default Contact;