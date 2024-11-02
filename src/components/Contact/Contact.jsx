import css from './Contact.module.css';
import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.card}>
      <div>
        <h3 className={css.name}>
          <MdPerson />
          {name}
        </h3>
        <p className={css.number}>
          <MdPhone />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
