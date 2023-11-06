import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ]; 

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <Item key={id} id={id} name={name} number={number}>
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