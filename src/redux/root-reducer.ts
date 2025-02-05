import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reduce";


export const rootReducer = combineReducers({
    userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
