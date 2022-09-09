import {createAsyncThunk} from '@reduxjs/toolkit';
import {cardDetailsRequest} from 'src/requests/api';


export const fetchCardDetails = createAsyncThunk(
  'cards/id',
  async (props) =>
  {
    const {id} = props;
    return cardDetailsRequest(id);
  },
);
