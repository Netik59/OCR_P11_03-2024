import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Tony Stark
// First Name: Tony
// Last Name: Stark
// Email: tony@stark.com
// Password: password123


// Steve Rogers
// First Name: Steve,
// Last Name: Rogers,
// Email: steve@rogers.com,
// Password: password456

export const loginAsync = createAsyncThunk(
    'login',
    async ({ email, password }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.body.token);
                return data;
            } else {
                throw new Error('Échec de la connexion.');
            }
        } catch (error) {
            throw new Error('Erreur lors de la connexion :' + error.message);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        connected: false,
        error: null
    },
    reducers: {
        updateFirstName: (currentState, action) => {
            const owner = { ...currentState.owner, firstName: action.payload }
            return { ...currentState, owner }
        },
        logout: () => {
            localStorage.removeItem('token');
            return { token: null, connected: false, error: null }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.connected = true;
                state.token = action.payload.body.token;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});