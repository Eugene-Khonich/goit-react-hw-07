import css from './ContactLIst.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(item => (
        <Contact key={item.id} name={item.name} number={item.number} />
      ))}
    </ul>
  );
};

export default ContactList;
