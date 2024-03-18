import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        connected: false
    },
    reducers: {
        updateFirstName: (currentState, action) => {
            const owner = { ...currentState.owner, firstName: action.payload }
            return { ...currentState, owner }
        },
        login: (currentState, action) => {
            const { username, password } = action.payload
            console.log(username)
            console.log(password)
            return { token: "bonjour", connected: true }
        },
        logout: () => {

        }
    }
});