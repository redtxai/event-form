import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePicker from './DatePicker';
import { generateMockDateTime, generateMockDurations } from './datepicker-mock';

describe('Basic Datepicker', () => {
  const controlsDateTimeMockDate = generateMockDateTime()
  const controlsDurationMockDate = generateMockDurations()

  test('Renders Datepicker', () => {
    const dateTimeSelected = controlsDateTimeMockDate[0]
    const durationSelected = controlsDurationMockDate[0]
    render(<DatePicker dateTimeDefaultValue={dateTimeSelected} durationDefaultValue={durationSelected}/>)

    const inputDateTimeElement = screen.getByDisplayValue(dateTimeSelected)

    expect(inputDateTimeElement).toBeInTheDocument();
    expect(inputDateTimeElement).toHaveAttribute('id', 'date-time');
    expect(inputDateTimeElement).toHaveAttribute('name', 'date-time');
    expect(inputDateTimeElement).toHaveValue(dateTimeSelected);

    const inputDurationElement = screen.getByDisplayValue(durationSelected)

    expect(inputDurationElement).toBeInTheDocument();
    expect(inputDurationElement).toHaveAttribute('id', 'duration');
    expect(inputDurationElement).toHaveAttribute('name', 'duration');
    expect(inputDurationElement).toHaveValue(durationSelected);
  })

  test('Renders Datepicker with errors', () => {
    render(<DatePicker showDateTimeError={true} showDurationError={true}/>)

    const errorDateTimeElement = screen.getByText('Date & time is required.')

    expect(errorDateTimeElement).toBeInTheDocument();

    const errorDurationElement = screen.getByText('Duration is required.')

    expect(errorDurationElement).toBeInTheDocument();
  })
})