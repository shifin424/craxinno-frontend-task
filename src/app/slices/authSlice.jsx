import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAccount } from '../../services/userServices';
import { saveTokens } from '../../utils/token';

const initialState = {
    user: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    error: ""
}

export const userData = createAsyncThunk(
    "/create-account",
    async (data) => {
        try {
            const response = await createAccount(data);
            console.log(response.data, "in thunk api")
            const accessToken = response?.data?.accessToken;
            const refreshToken = response?.data?.refreshToken;
            saveTokens(accessToken, refreshToken);
            return response.data
        } catch (error) {
            throw error.response.data.message;
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
                state.isError = false;
                state.error = '';
            })
            .addCase(userData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = action?.payload?.message;
            })
            .addCase(userData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.message = action.payload;
            })
    },
});