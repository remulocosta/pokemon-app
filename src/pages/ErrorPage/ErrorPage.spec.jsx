import {render, screen} from '@testing-library/react';
import React from 'react';
import {Button} from 'src/components/Button';
import {beforeEach, describe, expect, it, vi} from 'vitest';

const onClick = vi.fn();

describe('Error Page tests', async () =>
{
  beforeEach(() =>
  {
    render(<Button onClick={onClick}>CLICK</Button>);
  });

  it('should render its children correctly', async () =>
  {
    expect(screen.getByText('CLICK')).toBeInTheDocument();
  });

  it('should not rend another name as children', async () =>
  {
    expect(screen.queryByText('NOT CLICK')).not.toBeInTheDocument();
  });

  it('should call onClick', async () =>
  {
    const button = screen.getByText('CLICK');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
