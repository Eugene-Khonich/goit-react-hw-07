import css from './Contact.module.css';
import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

const Contact = ({ name, number }) => {
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
      <button type="button" className={css.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
