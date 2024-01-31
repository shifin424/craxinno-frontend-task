import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    Banner: bannerSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer
})