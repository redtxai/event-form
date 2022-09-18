import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Textarea from './Textarea';

describe('Basic Textarea', () => {
  const controlTestId = 'test-id-1'
  const controlTestPlaceholder = 'Test Textarea'
  const controlTestRow = 4

  render(<Textarea id={controlTestId} name={controlTestId} placeholder={controlTestPlaceholder} rows={controlTestRow}/>);
  const textareaElement = screen.queryByPlaceholderText(controlTestPlaceholder)

  test('Renders Textarea', () => {
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveAttribute('id', controlTestId);
    expect(textareaElement).toHaveAttribute('name', controlTestId);
    expect(textareaElement).toHaveAttribute('placeholder', controlTestPlaceholder);
    expect(textareaElement).toHaveAttribute('rows', '' + controlTestRow);
    expect(textareaElement).toHaveValue('');
  });

  test('Changes value', () => {
    const controlTestChangeValue = 'Changed value'
    if (textareaElement) {
      fireEvent.change(textareaElement, { target: { value: controlTestChangeValue }})
    }
    expect(textareaElement).toHaveValue(controlTestChangeValue);
  })
})
