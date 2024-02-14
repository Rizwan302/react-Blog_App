import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "light",
    themeColor: true
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        light: (state, action) => {
            state.status = "light";
            state.themeColor = true;
        },
        dark: (state, action) => {
            state.status = "dark";
            state.themeColor = false
        }
    }
});

export const { light, dark } = themeSlice.actions;
export default themeSlice.reducer;
