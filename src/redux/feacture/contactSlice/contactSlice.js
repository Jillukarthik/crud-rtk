import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [
      {
        id: 1,
        name: "Mayank Kumar",
        email: "mayankkumar@gmail.com",
        phone: "+91767656526",
        status: "Active",
      },
      {
        id: 2,
        name: "Jitender Kumar",
        email: "jitenderskumar@gmail.com",
        phone: "+918878446746",
        status: "Inactive",
      },
      {
        id: 3,
        name: "James Gun",
        email: "jamesgun@gmail.com",
        phone: "+919768446746",
        status: "Active",
      },
      {
        id: 4,
        name: "James Bond",
        email: "jamesbind@gmail.com",
        phone: "+917768446746",
        status: "Inactive",
      },
      {
        id: 5,
        name: "Mayank Kumar",
        email: "mayankkumar@gmail.com",
        phone: "+91767656526",
        status: "Active",
      },
      {
        id: 6,
        name: "Mayank Kumar",
        email: "mayankkumar@gmail.com",
        phone: "+91767656526",
        status: "Active",
      },
    ],
    filter: "All",
    contact: {
      name: "",
      email: "",
      phone: "",
      status: "",
    },
  },
  reducers: {
    getContact: (state, action) => {
      state.contact = state.contacts.find((item) => item.id === action.payload);
    },
    addContact: (state, action) => {
      const newState = { ...action.payload, id: uuidv4() };
      state.contacts = [newState, ...state.contacts];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
    updateContact: (state, action) => {
      state.contacts = state.contacts.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addContact, deleteContact, updateContact, getContact } =
  contactSlice.actions;
export default contactSlice.reducer;
