import React from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const DateSelector = ({
  className,
  selectDate,
  setSelectDate,
  disabled = false,
}) => {
  return (
    <DatePicker
      className={className}
      dateFormat={"yyyy-MM-dd"}
      selected={selectDate}
      onChange={(date) => setSelectDate(date)}
      maxDate={addDays(new Date(), 1)}
      showMonthDropdown
      showYearDropdown
      disabled={disabled}
      dropdownMode="select"
      locale={ko}
    />
  );
};

export default DateSelector;
