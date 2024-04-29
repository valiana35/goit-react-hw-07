import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <h2 className={css.name}>
        <FaUser />
        {name}
      </h2>
      <p className={css.number}>
        <FaPhone />
        {number}
      </p>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
