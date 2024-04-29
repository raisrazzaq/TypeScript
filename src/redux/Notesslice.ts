import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export {RootState} from './Store';

export interface notes {
  name: string;
  desc: string;
}
const intialState: Array<Note> = [];
export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.push(action.payload);
    },
  },
});

export const {addNote} = notesSlice.actions;
export const noteSelector = (state: RootState) => state.notereducer;
export default notesSlice.reducerPath;
