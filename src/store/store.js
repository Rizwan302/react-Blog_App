import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import themSlice from "./themSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        theme: themSlice
    },    
   
});

export default store