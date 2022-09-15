import { useCallback, useState } from "react";
import Label from "../label/Label";
import Select, { OptionType } from "../Select/Select";
import { generateMockDateTime, generateMockDurations } from "./datepicker-mock";

type DatePickerProps = {
  text?: string,
  htmlFor?: string,
  className?: string,
}

function DatePicker({ text, htmlFor, className,  }: DatePickerProps) {
  const [dateTimeOptions, setDateTimeOptions] = useState<OptionType[]>(generateMockDateTime())
  const [durationOptions, setDurationOptions] = useState<OptionType[]>(generateMockDurations())

  const handleDateTimeSelect = useCallback(
    (selectedOption: string) => {
      setDateTimeOptions((prevOptions) => {
        return prevOptions.map(({ text }) => ({ text, selected: text === selectedOption }))
      })
    },
    [],
  )

  const handleDurationSelect = useCallback(
    (selectedOption: string) => {
      setDurationOptions((prevOptions) => {
        return prevOptions.map(({ text }) => ({ text, selected: text === selectedOption }))
      })
    },
    [],
  )

  return (
    <section className="w-full">
      <Label text="Set date and time"></Label>
      <div>
        <Select text="Date & time" options={dateTimeOptions} onClick={handleDateTimeSelect}></Select>
        <Select text="Duration" options={durationOptions} onClick={handleDurationSelect}></Select>
      </div>
    </section>
  )
}

export default DatePicker;
