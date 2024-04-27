import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: '',
  },
};

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      // .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.rejected, handleRejected)

      //addContact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
        //  state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, handleRejected)

      // deleteContact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
