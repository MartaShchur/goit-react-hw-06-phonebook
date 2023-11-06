import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
 
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button type="button" name="delete" onClick={handleDelete}>
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;