
import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../data/contacts.json'

const initialState = initialContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // Standart case
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
			return state.filter((contact) => contact.id !== action.payload);
		},
  }
});

export const selectContacts = (state) => {
  return state.contacts;
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//========================

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

//=====================================

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: { list: initialContacts},
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
//     },
//     updateFilter(state, action) {
//       state.filter = action.payload;
//     }
//   }
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const { addContact, deleteContact, updateFilter } = contactSlice.actions;
// /*export default contactSlice.reducer;*/
// export const contactReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

// =======================
// export const toursSlice = createSlice({
// 	name: 'tours',
// 	initialState,
// 	reducers: {
// 		// Standart case
// 		addTour: (state, action) => {
// 			state.push(action.payload);
// 		},
// 		// Special case, add smth to payload

// 		// addTour: {
// 		// 	reducer: (state, action) => {
// 		// 		state.push(action.payload);
// 		// 	},
// 		// 	prepare: (tour) => ({
// 		// 		payload: {
// 		// 			...tour,
// 		// 			completed: true,
// 		// 			id: uuidv4(),
// 		// 		},
// 		// 	}),
// 		// },
// 		removeTour: (state, action) => {
// 			return state.filter((tour) => tour.id !== action.payload);
// 		},
// 	},
// });



