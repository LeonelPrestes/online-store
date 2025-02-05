import { combineReducers } from "redux";
import { cartReducer } from "./Cart/cart-reducer";
import { userSlice } from "./User/user-slice";


export const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
