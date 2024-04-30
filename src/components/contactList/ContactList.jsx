import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {!contacts.length ? (
        <p>We did not find any contacts</p>
      ) : (
        <ul className={css.contactList}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Contact {...contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;