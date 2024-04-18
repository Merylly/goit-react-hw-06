import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactWrap}>
        <div className={css.contactWrapper}>
          <BiSolidUser size="25" color="black" />
          <p className={css.contactText}>{contact.name}</p>
        </div>
        <div className={css.contactWrapper}>
          <BiSolidPhone size="25" color="black" />
          <p className={css.contactText}>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
