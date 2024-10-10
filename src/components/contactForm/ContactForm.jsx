import styles from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initial_Values = {
  name: "",
  number: "",
};

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(5, "Too short!")
    .max(13, "Too long!")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initial_Values}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.text}>Name</span>
          <Field className={styles.input} name="name" type="text" />
        </label>
        <ErrorMessage
          className={styles.errorMessage}
          name="name"
          component="span"
        />

        <label className={styles.label}>
          <span className={styles.text}>Number</span>
          <Field className={styles.input} name="number" type="text" />
        </label>
        <ErrorMessage
          className={styles.errorMessage}
          name="number"
          component="span"
        />

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
