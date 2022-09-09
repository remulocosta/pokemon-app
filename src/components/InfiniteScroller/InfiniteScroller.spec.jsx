import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {InfiniteScroller} from 'src/components/InfiniteScroller';
import {store} from 'src/redux/store';
import {beforeEach, describe, expect, it, vi} from 'vitest';


const mock = ()=>({
  observe: vi.fn(),
  disconnect: vi.fn()
});

window.IntersectionObserver = vi.fn().mockImplementation(mock);

const onEndReached = vi.fn();
const observe = vi.fn();

const renderInfiniteScroller = () =>
{
  render(

    <Provider store={store}>
      <InfiniteScroller onEndReached={onEndReached}>a</InfiniteScroller>
    </Provider>,
  );
};

describe('Home test suite', () =>
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
    renderInfiniteScroller();
  });

  it('should call observer', () =>
  {
    expect(observe).toBeCalled();
  });
});
