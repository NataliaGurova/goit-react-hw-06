import css from "./Contact.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from 'react-redux'


const Contact = ({ contact }) => { 
  const { id, name, number } = contact;
  const dispatch = useDispatch()
  const deleteContact = () => {
    dispatch({
      type: "contacts/deleteContact",
      payload: id,
    });
  }

  return (
    <div className={css.item}>
      <div>
        <p className={css.iconName}><BsFillPersonFill size={20}/> {name}</p>
        <p><BsFillTelephoneFill /> {number}</p>
      </div>
      <button className={css.btn} onClick={deleteContact}>Delete</button>

    </div>
  )
}

export default Contact;