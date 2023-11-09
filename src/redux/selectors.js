export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter; 

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  
  return contacts.items.filter(contacts =>
    contacts.name.toLowerCase().includes(normalizedFilter)
  );
};
console.log(getVisibleContacts);
