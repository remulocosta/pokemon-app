import '@testing-library/jest-dom';
import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {AttackModal} from 'src/components/AttackModal';
import {mockedCard} from 'src/mocks/card';
import {beforeEach, describe, expect, it, vi} from 'vitest';


const ref = {
  current: {
    onClose: vi.fn(),
  },
};

const renderAttackModal = () =>
{
  render(
    <AttackModal attack={(mockedCard.attacks)[0]} ref={ref} />,
  );
};

describe('AttackModal test suite', () =>
{
  beforeEach(() => renderAttackModal());

  it('should render modal items', () =>
  {
    expect(screen.getByText('Custo:')).toBeInTheDocument();
    expect(screen.getByText('Dano:')).toBeInTheDocument();
  });

  it('should call on close when close button is pressed', async () =>
  {
    const button = screen.getByTestId('attack-modal-close-button');

    fireEvent.click(button);
    waitFor(() =>
    {
      expect(ref.current.onClose).toHaveBeenCalled();
    });
  });
});
