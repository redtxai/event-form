import { useCallback, useState } from "react";
import Select, { OptionType } from "../Select/Select";
import { generateMockDateTime, generateMockDurations } from "./datepicker-mock";

function DatePicker() {
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
    <section className="w-full flex justify-between">
      <Select text="Date & time" className="max-w-xxs" options={dateTimeOptions} onClick={handleDateTimeSelect}></Select>
      <Select text="Duration" className="max-w-xxs" options={durationOptions} onClick={handleDurationSelect}></Select>
    </section>
  )
}

export default DatePicker;
