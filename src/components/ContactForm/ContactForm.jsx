// import { useState } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
import { Form, Label, Button, Input } from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const formName = evt.target.elements.name.value;
    const formNumber = evt.target.elements.number.value;

    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    dispatch(addContact(formName, formNumber));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          placeholder="Enter name"
          value={contacts.name}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={contacts.number}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

// const nameInputId = nanoid();
// const numberInputId = nanoid();

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   // console.log (ContactForm)

//   const contacts = useSelector(getContacts);
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();

//     const form = event.target;
//     const formName = event.target.elements.name.value;
//     const formNumber = event.target.elements.number.value;

//     if (contacts.some(({ name }) => name === formName)) {
//       return alert(`${formName} is already in contacts`);
//     }

//     // const isInContacts = contacts.some(
//     //   contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
//     // );

//     // if (isInContacts) {
//     //   alert(`${name} is already in contacts`);
//     //   return;
//     // }

//     dispatch(addContact(formName, formNumber));
//      form.reset();
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label htmlFor={nameInputId}>
//         Name
//         <Input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces."
//           required
//         />
//       </Label>

//       <Label htmlFor={numberInputId}>
//         Number
//         <Input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </Label>

//       <Button type="submit">
//         Add contact
//       </Button>
//     </Form>
//   );
// };

// export default ContactForm;