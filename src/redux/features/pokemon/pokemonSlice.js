import {createSlice} from '@reduxjs/toolkit';
import {fetchCardDetails} from 'src/redux/thunk/fetchCardDetail';
import {fetchCards} from 'src/redux/thunk/fetchCards';


export const initialState = {
  cards: [],
  isLoading: false,
  page: 1,
  shouldFetchMoreData: true,
  feedbackMessage: undefined,
  detailedCard: undefined,
};


// validation of types
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    resetCardsState: state =>
    {
      state.cards = initialState.cards;
      state.isLoading = initialState.isLoading;
      state.page = initialState.page;
      state.shouldFetchMoreData = initialState.shouldFetchMoreData;
      state.feedbackMessage = initialState.feedbackMessage;
    },
    resetCardsFeedbackMessage: state =>
    {
      state.feedbackMessage = initialState.feedbackMessage;
    },
  },
  extraReducers: builder =>
  {
    // fetchCards
    builder.addCase(fetchCards.pending, state =>
    {
      state.isLoading = true;
    });

    builder.addCase(fetchCards.fulfilled, (state, action) =>
    {
      if (action.payload === undefined) return;
      state.cards = [...state.cards, ...action.payload.data];
      state.page = action.payload.page + 1;

      if (action.payload.count * action.payload.page >=
        action.payload.totalCount
      )
      {
        state.shouldFetchMoreData = false;
      }

      state.isLoading = false;
    });

    builder.addCase(fetchCards.rejected, state =>
    {
      state.feedbackMessage = 'requestError';
      state.isLoading = false;
    });

    // fetchCardDetails
    builder.addCase(fetchCardDetails.pending, state =>
    {
      state.isLoading = true;
      state.detailedCard = undefined;
    });

    builder.addCase(fetchCardDetails.fulfilled, (state, action) =>
    {
      if (action.payload === undefined)
      {
        return;
      }


      state.detailedCard = action.payload.data;
      state.isLoading = false;
    });

    builder.addCase(fetchCardDetails.rejected, state =>
    {
      state.feedbackMessage = 'requestError';
      state.isLoading = false;
    });
  },
});


export const {resetCardsState,
              resetCardsFeedbackMessage} = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
