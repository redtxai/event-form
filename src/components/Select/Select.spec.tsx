import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Basic Select', () => {
  const controlTestId = 'test-id-1'
  const controlTestMockOptions = ['test 1', 'test 2', 'test 3', 'test 4' ,'test 5']
  const controlTestValue = 'test1'

  test('Renders Select', () => {
    const controlTestText = 'Test Select'

    render(<Select id={controlTestId} name={controlTestId} options={controlTestMockOptions} text={controlTestText} value={controlTestValue}/>);
    const inputElement = screen.getByDisplayValue(controlTestValue)
    const labelElement = screen.getByText(controlTestValue)

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', controlTestId);
    expect(inputElement).toHaveAttribute('name', controlTestId);
    
    expect(labelElement).toBeInTheDocument();
  });

  test('Renders Select with error', () => {
    const controlTestText = 'Test Select'

    render(<Select id={controlTestId} name={controlTestId} options={controlTestMockOptions} text={controlTestText} value={controlTestValue} showError={true}/>);
    const inputElement = screen.getByDisplayValue(controlTestValue)
    const labelElement = screen.getByText(controlTestValue)
    const errorElement = screen.getByText(controlTestText + ' is required.')

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', controlTestId);
    expect(inputElement).toHaveAttribute('name', controlTestId);
    
    expect(labelElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });

  test('Renders Select with custom error', () => {
    const controlTestText = 'Test Select is required'

    render(<Select id={controlTestId} name={controlTestId} options={controlTestMockOptions} text={controlTestText} errorText={controlTestText} value={controlTestValue} showError={true}/>);
    const inputElement = screen.getByDisplayValue(controlTestValue)
    const labelElement = screen.getByText(controlTestValue)
    const errorElement = screen.getByText(controlTestText)

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', controlTestId);
    expect(inputElement).toHaveAttribute('name', controlTestId);
    
    expect(labelElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });
})
