import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import resourceService from './resourceService';

const initialState = {
  resources: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get user resources
export const getResources = createAsyncThunk(
  'resources/getAll',
  async (queryParams, thunkAPI) => {
    try {
      return await resourceService.getResources(queryParams)
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

export const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResources.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getResources.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.activities = action.payload
      })
      .addCase(getResources.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = resourceSlice.actions
export default resourceSlice.reducer