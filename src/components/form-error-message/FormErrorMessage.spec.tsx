import React from 'react';
import { render, screen } from '@testing-library/react';
import FormErrorMessage from './FormErrorMessage';

describe('Basic FormErrorMessage', () => {
  const controlTestText = 'Test Text'

  test('Renders FormErrorMessage', () => {
    render(<FormErrorMessage text={controlTestText}/>);
    const FormErrorMessageElement = screen.getByText(controlTestText + ' is required.')

    expect(FormErrorMessageElement).toBeInTheDocument();
  });

  test('Renders FormErrorMessage with custom error text', () => {
    const controlTestErrorText = controlTestText + ' error.'

    render(<FormErrorMessage errorText={controlTestErrorText}/>);
    const FormErrorMessageElement = screen.getByText(controlTestErrorText)

    expect(FormErrorMessageElement).toBeInTheDocument();
  });
})
