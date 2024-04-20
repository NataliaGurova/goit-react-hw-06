
import initialContacts from '../data/contacts.json'

const initialState = initialContacts;


export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "contacts/addContact":
        return [...state, action.payload];
      
      case "contacts/deleteContact":     
        return state.filter((contact) => contact.id !== action.payload);
    
      default:
        return state;      
    }
};

export const addContact = (newContact) => {
	return {
		type: "contacts/addContact",
		payload: newContact,
	};
};

export const deleteContact = (id) => {
	return {
		type: "contacts/deleteContact",
		payload: id,
	};
};

export const selectContacts = (state) => state.contacts;