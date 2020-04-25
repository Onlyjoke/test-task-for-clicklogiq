import { createSlice } from '@reduxjs/toolkit';

import photos from '../../photos.json';

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    data: [],
    sortKey: '',
  },
  reducers: {
    getPhotos: (state, action) => {
      state.data = action.payload.data;
    },
    sortByKey: (state, action) => {
      const key = action.payload;

      state.data.sort((a, b) => {
        if (state.sortKey === key) {
          return -1;
        }

        if (a[key] > b[key]) {
          return 1;
        }

        if (a[key] < b[key]) {
          return -1;
        }

        return 0;
      });

      state.sortKey = key;
    }
  },
});

export const { getPhotos, sortByKey } = photosSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getPhotosData = () => dispatch => {
  setTimeout(() => {
    dispatch(getPhotos(photos));
  }, 1000);
};

export const sortDataByKey = (key) => dispatch => {
  dispatch(sortByKey(key));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectImages = state => state.photos.data;
export const selectSortKey = state => state.photos.sortKey;

export default photosSlice.reducer;
