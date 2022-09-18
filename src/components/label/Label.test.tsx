import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Basic Label', () => {
  const controlTestId = 'test-id-1'
  const controlTestText = 'Test Label'

  render(<Label text={controlTestText} htmlFor={controlTestId}/>);
  const labelElement = screen.getByText(controlTestText)

  test('Renders Label', async () => {
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', controlTestId);
  });
})
