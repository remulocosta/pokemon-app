import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {mockedCard} from 'src/mocks/card';
import {beforeEach, describe, expect, it} from 'vitest';

// import {pokemonTypeTransalation} from 'translations/pokemonType';
import {CardElement} from 'src/components/Card';

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

const renderSmallCard = () =>
{
  render(
    <BrowserRouter>
      <CardElement card={mockedCard} />
    </BrowserRouter>
  );
};

describe('SmallCard test suite', () =>
{
  beforeEach(() => renderSmallCard());

  it('should render with the correct name and id', () =>
  {
    const smallCard = screen.getByTestId('small-card');

    expect(smallCard).toBeInTheDocument();
    expect(screen.getByText(mockedCard.name)).toBeInTheDocument();
    expect(screen.getByText(mockedCard.id)).toBeInTheDocument();
  });

  it('should render the correct type quantity', () =>
  {
    const tagLists = screen.getAllByTestId('tag');

    expect(tagLists).toHaveLength(2);

    mockedCard.types?.forEach((type, index) =>
    {
      // expect(tagLists[index]).toHaveTextContent(translatedValue[type]);
      expect(tagLists[index]).toHaveTextContent(type);
    });
  });

  it('should not have a wrong type', () =>
  {
    const tagLists = screen.getAllByTestId('tag');

    tagLists.forEach(tag =>
    {
      expect(tag).not.toHaveTextContent('Fire');
    });
  });

  it('should have the correct link', () =>
  {
    const anchor = screen.getByTestId('small-card-anchor');

    expect(anchor).toHaveAttribute('href', `/card/${mockedCard.id}`);
  });
});
