import css from './Contact.module.css';
import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
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
      <button type="button" onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
