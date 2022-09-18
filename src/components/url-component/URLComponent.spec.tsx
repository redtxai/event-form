import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import URLComponent from './URLComponent';

describe('Basic URLComponent', () => {
  const controlTestId = 'test-id-1'
  const controlTestPlaceholder = 'Test input'
  const controlTestDomain = 'Test input'

  render(<URLComponent domain={controlTestDomain} id={controlTestId} name={controlTestId} placeholder={controlTestPlaceholder} />);
  const inputElement = screen.queryByPlaceholderText(controlTestPlaceholder)
  const spanElement = screen.getByText(controlTestDomain)

  test('Renders URL component', () => {
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', controlTestId);
    expect(inputElement).toHaveAttribute('name', controlTestId);
    expect(inputElement).toHaveAttribute('placeholder', controlTestPlaceholder);
    expect(inputElement).toHaveValue('');
    expect(spanElement).toBeInTheDocument();
  });

  test('Changes value', () => {
    const controlTestChangeValue = 'Changed value'
    if (inputElement) {
      fireEvent.change(inputElement, { target: { value: controlTestChangeValue }})
    }
    expect(inputElement).toHaveValue(controlTestChangeValue);
  })
})
