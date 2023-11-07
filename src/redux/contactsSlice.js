import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

// const contactsInitialState = {
//   items: [
//     { id: 'id-1', name: 'Steve Jobs', number: '459-12-56' },
//     { id: 'id-2', name: 'Bill Gates', number: '443-89-12' },
//     { id: 'id-3', name: 'Elon Musk', number: '645-17-79' },
//     { id: 'id-4', name: 'Mark Zuckerberg', number: '227-91-26' },
//   ],
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;