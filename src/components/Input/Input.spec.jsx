import React from 'react';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import {Input} from 'src/components/Input';
import '@testing-library/jest-dom';

const onChange = vi.fn();

const renderInput = () =>
{
  render(<Input value="marcos" onChange={onChange} />);
};

describe('Input test suite', () =>
{
  beforeEach(() => renderInput());

  it('should render with the correct value', () =>
  {
    const input = screen.getByTestId('input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('marcos');
  });

  it('should call onChange when something is typed', () =>
  {
    const input = screen.getByTestId('input');

    fireEvent.change(input, {target: {value: 'marcos 2'}});
    expect(onChange).toHaveBeenCalled();
  });
});
