import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/selectors';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Request in progress...</p>}
      {error && <p>We found an error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
