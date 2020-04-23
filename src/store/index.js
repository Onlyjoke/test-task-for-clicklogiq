import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../components/Photos/PhotoStore';

export default configureStore({
  reducer: {
    photos: photosReducer,
  },
});
