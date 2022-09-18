import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Basic Button', () => {
  const controlTestText = 'Test Button'
  
  test('Renders Button', () => {
    render(<Button text={controlTestText}/>);
    const buttonElement = screen.getByText(controlTestText)
    expect(buttonElement).toBeInTheDocument();
  });

  test('Renders Button with children', () => {
    render(<Button>{controlTestText}</Button>);
    const buttonElement = screen.getByText(controlTestText)
    expect(buttonElement).toBeInTheDocument();
  });
})
