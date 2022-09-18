import React from 'react';
import { render, screen } from '@testing-library/react';
import OnboardingIllustration from './OnboardingIllustration';
import { onboardingTypeMap } from './onboarding-model';

describe('Basic OnboardingIllustration', () => {
  const controlTestName = 'test-name'
  
  test('Renders virtual Onboarding', () => {
    const controlTestOnboardingType = 'virtual'

    render(<OnboardingIllustration name={controlTestName} type={controlTestOnboardingType} value={controlTestOnboardingType}/>);
    const titleElement = screen.getByText(onboardingTypeMap[controlTestOnboardingType].title)
    const imgElement = screen.getByAltText(controlTestOnboardingType)

    expect(titleElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });

  test('Renders inperson Onboarding', () => {
    const controlTestOnboardingType = 'inperson'

    render(<OnboardingIllustration name={controlTestName} type={controlTestOnboardingType}  value={controlTestOnboardingType}/>);
    const titleElement = screen.getByText(onboardingTypeMap[controlTestOnboardingType].title)
    const imgElement = screen.getByAltText(controlTestOnboardingType)
    const inputElement = screen.getByDisplayValue(controlTestOnboardingType)

    expect(titleElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', controlTestName);
  });
})
