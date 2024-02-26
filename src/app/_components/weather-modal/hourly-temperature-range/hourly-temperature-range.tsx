import React, { ChangeEvent, useState } from "react";
import Temperature from "../temperature/temperature";
import convertNumberToTime from "@/lib/utils/convert-number-to-time";

export interface TemperatureRangeProps {
  temperatures: number[];
}

export default function HourlyTemperatureRange({
  temperatures,
}: TemperatureRangeProps) {
  const [value, setValue] = useState(temperatures[0]);
  const [hour, setHour] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    setHour(Number(e.target.value));
  };

  return (
    <div>
      <label className="text-xl">Hourly temperature</label>
      <input
        type="range"
        id="rangeSlider"
        min="0"
        max={temperatures.length - 1}
        value={value}
        onChange={handleChange}
        className="w-full"
      />
      <Temperature temperature={value} label={convertNumberToTime(hour)} />
    </div>
  );
}
