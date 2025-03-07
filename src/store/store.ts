import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authentication/authSlice"
import storeReducer from "./GS_Store/storeSlice"
import skuReducer from "./GS_SKU/SkuSlice"
export const store =configureStore({
    reducer:{
        auth:authReducer,
        store:storeReducer,
        sku: skuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch =typeof store.dispatch