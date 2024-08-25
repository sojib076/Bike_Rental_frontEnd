import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: false,
    token: null,
    role: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.auth = true;
            state.token = action.payload.token;
            state.role = action.payload.data.role;
        },
        logoutUser(state) {
            state.auth = false;
            state.token = null;
        },
    },
});

export const { loginSuccess, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
