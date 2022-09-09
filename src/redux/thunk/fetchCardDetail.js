import {createAsyncThunk} from '@reduxjs/toolkit';
import {cardDetailsRequest} from 'src/requests/api';


export const fetchCardDetails = createAsyncThunk(
  'cards/id',
  async ({id}) =>
  {
    return cardDetailsRequest(id);
  },
);
