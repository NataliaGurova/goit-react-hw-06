
// import { useId } from "react";
import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import * as Yup from 'yup';

const initialValues = {
  id: "", 
  name: "",
  number: ""
};

const FormSchema = Yup.object().shape({
  name: Yup.string().trim().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
	number: Yup.string()
    .matches(/^\+?[ ()0-9-]+$/, "Invalid phone number").min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const ContactForm = ({onContact}) => {
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    // values.name.trim()
    console.log(values);
    onContact(values)
		actions.resetForm();   
	};

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(evt)

//     // Викликаємо пропс onContact
//     onContact({
//       id: Date.now(),
//       name: evt.target.elements.login.value,
//       number: evt.target.elements.number.value,
//     });

//     form.reset();
//   };



  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FormSchema}>
    <Form className={css.submitForm}>
      <label className={css.userLabel}>Name</label>
        <Field type="text" name="name" className={css.userName} />
        <ErrorMessage name='name' component='p' className={css.error} />
      <label className={css.numberLabel}>Number</label>
        <Field type="text" name="number" className={css.numberName} />
        <ErrorMessage name='number' component='p' className={css.error} />
      <button className={css.btn} type="submit">Add contact</button>
    </Form>
    </Formik>
  );
};

export default ContactForm;