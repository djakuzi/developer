import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./slices/projects.slice";
import burgerReducer from "./slices/burger.slice"


export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        burger: burgerReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch