import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './contactsOps';

const INITIAL_STATE = {
  items: null,
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default contactsSlice.reducer;
