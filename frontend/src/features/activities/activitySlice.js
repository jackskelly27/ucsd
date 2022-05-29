import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import activityService from './activityService';

const initialState = {
  activities: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get user activities
export const getActivities = createAsyncThunk(
  'activities/getAll',
  async (_, thunkAPI) => {
    try {
      return await activityService.getActivities()
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

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.activities = action.payload
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = activitySlice.actions
export default activitySlice.reducer