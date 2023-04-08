import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IChangeCommunity } from './types';

const user = createSlice({
  name: 'user',
  initialState: {
    id: 'current',
    selectedCommunity: {
      id: '1',
      name: 'SERIES A INVESTIDORES',
    },
  },
  reducers: {
    userChangeSelectedCommunity(
      state,
      action: PayloadAction<IChangeCommunity>,
    ) {
      state.selectedCommunity = action.payload;
    },
  },
});

export const { userChangeSelectedCommunity } = user.actions;

export default user.reducer;
