/* eslint-disable no-await-in-loop */
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {DetailedCard} from 'src/components/DetailedCard';
import {mockedCard} from 'src/mocks/card';

// import {pokemonTypeTransalation} from 'translations/pokemonType';
import {beforeEach, describe, expect, it} from 'vitest';

// vi.mock('next/router', () =>
// {
//   return {
//     useRouter: () => ({
//       locale: 'pt-BR',
//       defaultLocale: 'pt-BR',
//     }),
//   };
// });

// const translatedValue = pokemonTypeTransalation['pt-BR'];

const renderDetailedCard = () =>
{
  render(<DetailedCard card={mockedCard} />);
};

describe('DetailedCard test suite', () =>
{
  beforeEach(() => renderDetailedCard());

  it('should render with the correct name and id', async () =>
  {
    const smallCard = screen.getByTestId('detailed-card');

    expect(smallCard).toBeInTheDocument();

    const img = screen.getByTestId('detailed-card-img');

    fireEvent.load(img);
    expect(await screen.findByText(mockedCard.name)).toBeInTheDocument();
    expect(await screen.findByText(mockedCard.id)).toBeInTheDocument();
  });

  it('should render the correct type quantity', async () =>
  {
    const img = screen.getByTestId('detailed-card-img');

    fireEvent.load(img);

    for (let i = 0; i < (mockedCard?.types?.length || 0); i++)
    {
      expect(

        // await screen.findByText(translatedValue[(mockedCard.types)[i]]),
        await screen.findByText((mockedCard.types)[i]),
      ).toBeInTheDocument();
    }
  });

  it('should render the correct attacks', async () =>
  {
    const img = screen.getByTestId('detailed-card-img');

    fireEvent.load(img);

    for (let i = 0; i < (mockedCard?.attacks?.length || 0); i++)
    {
      expect(
        await screen.findByText((mockedCard.attacks)[i].name),
      ).toBeInTheDocument();
    }
  });
});
