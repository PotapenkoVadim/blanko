import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../../interface';

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    reseted(state) {
      state.value = 0;
    },
  },
});

export const { incremented, decremented, reseted } = counterSlice.actions;

export default counterSlice.reducer;
