import {mockedCard} from 'src/mocks/card';
import {describe, expect, it} from 'vitest';
import {
  pokemonReducer,
  resetCardsState,
  resetCardsFeedbackMessage,
  initialState,
} from 'src/redux/features/pokemon/pokemonSlice';


describe('PokemonSlice test suite', () =>
{
  it('should return the initial state', () =>
  {
    expect(pokemonReducer(undefined, {})).toEqual(initialState);
  });

  it('should reset card feedback message', () =>
  {
    const previousState = {
      ...initialState,
      feedbackMessage: 'error',
    };

    expect(pokemonReducer(previousState, {})).toEqual(previousState);
    expect(pokemonReducer(previousState, resetCardsFeedbackMessage())).toEqual(
      initialState,
    );
  });

  it('should reset all states to initial State', () =>
  {
    const previousState = {
      cards: [mockedCard],
      isLoading: true,
      page: 4,
      shouldFetchMoreData: false,
      feedbackMessage: 'error',
    };

    expect(pokemonReducer(previousState, {})).toEqual(previousState);
    expect(pokemonReducer(previousState, resetCardsState())).toEqual(
      initialState,
    );
  });
});
