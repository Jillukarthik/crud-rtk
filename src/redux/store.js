import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./feacture/contactSlice/contactSlice";
export default configureStore({
    reducer:{
        contacts:contactReducer,
    }
})