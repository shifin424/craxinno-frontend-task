import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice} from '../slices/authSlice';

const rootReducer = combineReducers({
    userData: userSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer
})