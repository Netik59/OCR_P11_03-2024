import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../features/authSlice"


const state = {
    auth: {
        token: null,
        connected: false,
        userName: "",
        isChecked: null,
    },
}



export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            auth: authSlice.reducer,
        }),
        middleware: getDefaultMiddleware => getDefaultMiddleware(),
    }
)
