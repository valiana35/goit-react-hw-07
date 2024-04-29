import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";
import { selectContacts, selectError, selectIsLoading } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p>Something went wrong...</p>}
      {isLoading && <p>Loading...</p>}
      {contacts.length && <ContactList />}
    </div>
  );
}

export default App;