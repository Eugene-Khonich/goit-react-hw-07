import './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { fetchContacts } from '../../redux/contactsOps';

const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </div>
  );
};

export default App;
