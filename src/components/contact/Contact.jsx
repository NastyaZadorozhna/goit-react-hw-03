import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import styles from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.container}>
      <p className={styles.contactPar}>
        <IoPerson className={styles.icon} />
        {name}
      </p>
      <p className={styles.contactPar}>
        <FaPhone className={styles.icon} />
        {number}
      </p>
      <button type="button" className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
