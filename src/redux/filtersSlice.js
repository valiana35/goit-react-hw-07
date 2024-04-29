import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;