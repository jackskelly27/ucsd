import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import gymService from './gymService';

const initialState = {
  gyms: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get user gyms
export const getGyms = createAsyncThunk(
  'gyms/getAll',
  async (queryParams, thunkAPI) => {
    try {
      return await gymService.getGyms(queryParams)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const gymSlice = createSlice({
  name: 'gym',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGyms.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGyms.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.gyms = action.payload
      })
      .addCase(getGyms.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = gymSlice.actions
export default gymSlice.reducer