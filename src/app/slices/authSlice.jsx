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

export const userData = createAsyncThunk(
    "/create-account",
    async (data) => {
        try {
            const response = await createAccount(data);
            console.log(response,"in thunk api")
            return response.data
        } catch (error) {
            throw error;
        }
    }
);

export const userSliceSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AddBannerData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(AddBannerData.fulfilled, (state, action) => {
                console.log(action,"Action data")
                state.isLoading = false;
                state.isSuccess = true;
                state.bannerData = [...state.bannerData, action.payload];
                state.message = "Banner uploaded successfully";
            })
            .addCase(AddBannerData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.message = "Banner upload failed";
            })
    },
});