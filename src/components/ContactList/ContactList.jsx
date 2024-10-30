import css from './ContactLIst.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
  });

  return (
    <ul className={css.list}>
      {filteredContacts.map(item => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
