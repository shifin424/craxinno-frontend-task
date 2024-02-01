import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAccount } from '../../services/userServices';

const initialState = {
    user: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    error: ""
}

export const userData =  createAsyncThunk(
    "/create-account",
    async (data) => {
        try {
            const response = await createAccount(data);
            console.log(response,"in thunk api")
            return response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userData.fulfilled, (state, action) => {
                console.log(action,"Action data")
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.data;
                state.message = "User created successfully";
            })
            .addCase(userData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.message = "fail for creating a user ";
            })
    },
});