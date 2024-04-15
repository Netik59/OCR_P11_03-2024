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

export const updateUserNameAsync = createAsyncThunk(
    'update',
    async ({ userName }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({ userName })
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error(`Le changement du nom d'utilisateur n'a pas pu aboutir.`);
            }
        } catch (error) {
            throw new Error('Erreur lors de la modification du userName :' + error.message);
        }
    }
)

export const getUserProfileAsync = createAsyncThunk(
    'getUserProfile',
    async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                }
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error(`La récupération des données de l'utilisateur n'a pas pu aboutir.`);
            }
        } catch (error) {
            throw new Error('Erreur lors de la récupération :' + error.message);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        connected: false,
        error: null,
        userProfile: JSON.parse(localStorage.getItem('userProfile')) || null
    },
    reducers: {
        logout: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('userProfile');
            return { token: null, connected: false, error: null, userProfile: null }
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
            })
            .addCase(updateUserNameAsync.fulfilled, (state, action) => {
                console.log("Changement effectué")
            })
            .addCase(updateUserNameAsync.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(getUserProfileAsync.fulfilled, (state, action) => {
                state.userProfile = action.payload.body;
                localStorage.setItem('userProfile', JSON.stringify(action.payload.body));
            })
            .addCase(getUserProfileAsync.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});