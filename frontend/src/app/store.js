import { configureStore } from '@reduxjs/toolkit';
import activityReducer from '../features/activities/activitySlice';
import resourceReducer from '../features/resources/resourceSlice';
import gymReducer from '../features/gyms/gymSlice';

export const store = configureStore({
  reducer: {
    activities: activityReducer,
    resources: resourceReducer,
    gyms: gymReducer
  },
});
