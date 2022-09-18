import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Basic Title', () => {
  const controlTestText = 'Test Title'

  test('Renders large Title', () => {
    const controlTestType = 'large'

    render(<Title text={controlTestText} type={controlTestType}/>);
    const titleElement = screen.getByText(controlTestText)

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName === 'H1').toBe(true)
  });

  test('Renders small Title', () => {
    const controlTestType = 'small'

    render(<Title text={controlTestText} type={controlTestType}/>);
    const titleElement = screen.getByText(controlTestText)

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName === 'H6').toBe(true)
  });
})
