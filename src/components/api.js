import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6723ef96493fac3cf24cb4d3.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async () => {
  const { data } = await contactsInstance.post('/');
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/:${id}`);
  return data;
};
