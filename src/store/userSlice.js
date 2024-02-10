import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: '',
    userData: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        slug: (state, action) => {
            state.status = action.payload,
                state.userData = action.payload
        },

    }
})


export const { slug } = userSlice.actions;
export default userSlice.reducer;