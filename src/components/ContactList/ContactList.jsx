import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { ContactsListItem } from 'components/ContactListItem/ContactListItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = [
     ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  // const visibleContacts = [];

  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

export default ContactList;