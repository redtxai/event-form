import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Basic Input', () => {
  const controlTestId = 'test-id-1'
  const controlTestPlaceholder = 'Test input'

  render(<Input id={controlTestId} name={controlTestId} placeholder={controlTestPlaceholder}/>);
  const inputElement = screen.queryByPlaceholderText(controlTestPlaceholder)

  test('Renders Input', () => {
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', controlTestId);
    expect(inputElement).toHaveAttribute('name', controlTestId);
    expect(inputElement).toHaveAttribute('placeholder', controlTestPlaceholder);
    expect(inputElement).toHaveValue('');
  });

  test('Changes value', () => {
    const controlTestChangeValue = 'Changed value'
    if (inputElement) {
      fireEvent.change(inputElement, { target: { value: controlTestChangeValue }})
    }
    expect(inputElement).toHaveValue(controlTestChangeValue);
  })
})
