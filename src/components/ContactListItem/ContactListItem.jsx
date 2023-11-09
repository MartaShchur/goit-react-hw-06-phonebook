import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactListItem.styled';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = evt => {
    dispatch(deleteContact(evt.target.id));
  };

  return (
    <ContactItem>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Button id={id} type="button" onClick={handleDeleteContact}>Delete</Button>
    </ContactItem>
  );
};