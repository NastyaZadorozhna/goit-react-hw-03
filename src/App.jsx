import { useState, useEffect } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import Contacts from "./contacts.json";
import { nanoid } from "nanoid";
import styles from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const storagedContacts = localStorage.getItem("contacts");

    if (storagedContacts !== null) {
      return JSON.parse(storagedContacts);
    }

    return Contacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const onDelete = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} setFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={onDelete} />
    </div>
  );
}

export default App;
