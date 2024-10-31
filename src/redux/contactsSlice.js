import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import {
  apiFetchContacts,
  apiAddContacts,
  apiDeleteContacts,
} from './contactsOps';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(apiFetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiFetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload.contacts;
      })
      .addCase(apiFetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(apiAddContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiAddContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload.contacts;
      })
      .addCase(apiAddContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(apiDeleteContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiDeleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload.contacts;
      })
      .addCase(apiDeleteContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
