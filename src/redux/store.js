import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsReducer } from "./contactsSlice";

const rootReducer = combineReducers({
	contacts: contactsReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;


// // import { devToolsEnhancer } from "@redux-devtools/extension";
// import { configureStore } from "@reduxjs/toolkit";
// import initialContacts from '../data/contacts.json'

// // Початкове значення стану Redux для кореневого редюсера,
// // якщо не передати параметр preloadedState.
// const initialState = {
//   contacts: initialContacts,
//   // films: [],
// };

// // Поки що використовуємо редюсер який
// // тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case "contacts/addContact":     
//       return {
//         // ...state,
//         contacts: [...state.contacts, action.payload]
//       };
    
//     case "contacts/deleteContact":
//       // console.log(state, action);      
//       return {
//         // ...state,
//         contacts: state.contacts.filter((contact) => contact.id !== action.payload)
//       };
  
//     default:
//       return state;
      
//   }
// };

// // Створюємо розширення стора, щоб додати інструменти розробника
// // const enhancer = devToolsEnhancer();
// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
