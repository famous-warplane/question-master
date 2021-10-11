import { useColorModeValue } from "@chakra-ui/color-mode";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

export type DateRange = [Date, Date];

export type DatePickerProps = {
  onRangeChange: (range: DateRange) => void;
};

export default function DatePicker({ onRangeChange }: DatePickerProps) {
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [startDate, endDate] = dateRange;

  function onDateChanged(range: DateRange) {
    setDateRange(range);
    if (!range[0] && !range[1]) onRangeChange(null);
    if (range[1]) {
      onRangeChange?.(range);
    }
  }

  return (
    <div className={useColorModeValue("light-theme", "dark-theme")}>
      <ReactDatePicker
        isClearable
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(date) => onDateChanged(date as DateRange)}
      />
    </div>
  );
}
