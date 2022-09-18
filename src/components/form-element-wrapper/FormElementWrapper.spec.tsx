import React from 'react';
import { render, screen } from '@testing-library/react';
import FormElementWrapper from './FormElementWrapper';
import Input from '../input/Input';

describe('Basic FormElementWrapper', () => {
  const controlTestText = 'Test Text'

  test('Renders FormElementWrapper', async () => {
    render(<FormElementWrapper text={controlTestText}/>);
    const labelElement = screen.getByText(controlTestText)

    expect(labelElement).toBeInTheDocument();
  });

  test('Renders FormElementWrapper with error text', () => {
    const controlTestError = true
    const controlTestErrorText = 'Test Error Text'
    render(<FormElementWrapper text={controlTestErrorText} showError={controlTestError}/>);
    const errorElement = screen.getByText(controlTestErrorText + ' is required.')

    expect(errorElement).toBeInTheDocument();
  });

  test('Renders FormElementWrapper with custom error text', () => {
    const controlTestError = true
    const controlTestCustomErrorText = 'Test Error Text is required'
    render(<FormElementWrapper errorText={controlTestCustomErrorText} showError={controlTestError}/>);
    const errorElement = screen.getByText(controlTestCustomErrorText)

    expect(errorElement).toBeInTheDocument();
  });

  test('Renders FormElementWrapper with children', () => {
    const controlTestCustomLabelText = 'Test Text'
    const controlTestId = 'test-id-1'
    const controlTestPlaceholder = 'Test input'

    render(<FormElementWrapper text={controlTestCustomLabelText} htmlFor={controlTestId}>
      <Input id={controlTestId} name={controlTestId} placeholder={controlTestPlaceholder}/>
    </FormElementWrapper>);

    const labelElement = screen.getByText(controlTestCustomLabelText)
    const inputElement = screen.queryByPlaceholderText(controlTestPlaceholder)

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', controlTestId);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', controlTestId);
    expect(inputElement).toHaveAttribute('name', controlTestId);
    expect(inputElement).toHaveAttribute('placeholder', controlTestPlaceholder);
  });
})
