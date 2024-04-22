// import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";

// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const stringifiedContacts = localStorage.getItem("contacts");
  //   if (!stringifiedContacts) return initialContacts;

  //   const parsedContacts = JSON.parse(stringifiedContacts);
  //   return parsedContacts;
  // });

  // const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  // useEffect(() => localStorage.setItem("contacts", JSON.stringify(contacts)));

  const onAddContact = (formData) => {
    const finalContactCard = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addContact(finalContactCard));
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const onFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filters} onFilterChange={onFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
