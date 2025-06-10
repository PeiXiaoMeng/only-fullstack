import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: '#FFA500', // 默认橙色
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;