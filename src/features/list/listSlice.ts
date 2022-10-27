import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  items: string[];
}

const initialState: CounterState = {
  items:[],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, item) => {
      state.items = [...state.items, item.payload]
    },
    removeItem: (state, id) => {
      state.items.splice(id.payload, 1)
    }
  },
});

export const { addItem, removeItem } = listSlice.actions;

export const selectItems = (state: RootState) => state.list.items;

export default listSlice.reducer;
