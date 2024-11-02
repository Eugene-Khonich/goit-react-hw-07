import css from './ContactForm.module.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { AddProfileSchema } from '../utils/schema';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactsOps';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // event.preventDefault();
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContacts(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={AddProfileSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label className={css.labelName}>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.errorMsg} />
        </label>
        <label className={css.labelNumber}>
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMsg}
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
