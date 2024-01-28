import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload; // payload is a fixed word
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});


const store = configureStore({
    reducer: counterSlice.reducer
});

// Action Creator : Create Action Objects
export const counterActions = counterSlice.actions;

export default store;
