import styles from "./ContactList.module.css";
import Contact from "../contact/Contact";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contacts) => (
        <li className={styles.item} key={contacts.id}>
          <Contact data={contacts} onDelete={onDelete} />
        </li>
      ))}
      ;
    </ul>
  );
}

export default ContactList;
