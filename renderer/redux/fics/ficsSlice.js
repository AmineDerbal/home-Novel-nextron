import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fic: {},
  isLoading: false,
  hasError: false,
};

const ficsSlice = createSlice({
  name: 'fic',
  initialState,
  reducers: {},
});

export default ficsSlice.reducer;
