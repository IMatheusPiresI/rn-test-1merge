import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IChangeCommunityId } from './types';

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
    userChangeSelectedCommunityId(
      state,
      action: PayloadAction<IChangeCommunityId>,
    ) {
      state.selectedCommunity.id = action.payload.id;
    },
  },
});

export const { userChangeSelectedCommunityId } = user.actions;

export default user.reducer;
