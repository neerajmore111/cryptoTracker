import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../Utilis/SampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleData,
  reducers: {
    updateCrypto(state, action) {
      const updates = action.payload;
      updates.forEach((update) => {
        const index = state.findIndex((item) => item.symbol === update.symbol);
        if (index !== -1) {
          state[index] = { ...state[index], ...update };
        }
      });
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
