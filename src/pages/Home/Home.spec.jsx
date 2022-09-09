import {render, screen} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {Home} from 'src/pages/Home';
import {store} from 'src/redux/store';
import {beforeEach, describe, expect, it, vi} from 'vitest';

vi.mock('requests/api', () =>
{
  return {
    cardsRequest: () => ({
      data: mockedCard,
      page: 2,
      count: 1,
      totalCount: 2,
    }),
  };
});

const renderHome = () =>
{
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
};

const observe = vi.fn();

describe('Home test suite', async () =>
{
  beforeEach(() =>
  {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe,
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    });

    window.IntersectionObserver = mockIntersectionObserver;
    renderHome();
  });

  it('should render Home', () =>
  {
    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });

  it('should call observer', () =>
  {
    expect(observe).toBeCalled();
  });
});
