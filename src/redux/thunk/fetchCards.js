import {createAsyncThunk} from '@reduxjs/toolkit';
import {cardsRequest} from 'src/requests/api';


export const fetchCards = createAsyncThunk(
  'cards/list',
  async (props, thunkAPI) =>
  {
    const {filter} = props;
    const state = thunkAPI.getState();
    const {page, shouldFetchMoreData} = (state).pokemon;

    if (!shouldFetchMoreData) return undefined;

    return cardsRequest(page, filter);
  },
);
