import { useDataContext } from 'hooks/useDataContext';
import { FC, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import es from "date-fns/locale/es";

import { addDays, format, isWeekend } from 'date-fns';

interface IAppDateRangeProps {
    months?: number;
  }
  
const AppDate: FC<IAppDateRangeProps> = ({ months }) => {
  const [{ checkIn, checkOut }, dispatch] = useDataContext();

  const [state, setState] = useState({
    selection1: {
      startDate: new Date(), // addDays(new Date(), -6),
      endDate: new Date(),
      key: 'selection1'
    },
    selection2: {
      startDate: new Date(), //addDays(new Date(), 1),
      endDate: new Date(), // addDays(new Date(), 7),
      key: 'selection2',
    },
  });
  
  /* const selectionRange = {
    startDate: checkIn,
    endDate: checkOut,
    key: 'selection',
  }; */

  const handleDatePicker = (range) => {
    console.log(range);
    const { startDate, endDate } = range.selection;
    // dispatch({ type: DATA_ACTION_TYPES.SET_CHECK_IN, payload: startDate });
    // dispatch({ type: DATA_ACTION_TYPES.SET_CHECK_OUT, payload: endDate });
  };

  const handleSelect = (date) => {
    console.log(date); // native Date object
  }

  function customDayContent(day: any) {
    let extraDot = null;
    if (isWeekend(day)) {
      extraDot = (
        <div
          style={{
            height: "5px",
            width: "5px",
            borderRadius: "100%",
            background: "orange",
            position: "absolute",
            top: 2,
            right: 2,
          }}
        />
      )
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, "d")}</span>
      </div>
    )
  }
//DateRange
  return (
    <DateRangePicker
    onChange={item => setState({ ...state, ...item })}
    showSelectionPreview={true}
    moveRangeOnFirstSelection={false}
    months={1}
    ranges={[state.selection1, state.selection2]}
    direction="horizontal"
    dragSelectionEnabled={false}
    editableDateInputs={false}
    fixedHeight={false}
    autoFocus={false}
    linkedCalendars={false}
    endDatePlaceholder="Fecha Final"
    showDateDisplay={false}
    startDatePlaceholder="Fecha Inicial"
    locale={es}
    ariaLabels={{
        dateInput: {
        selection1: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
        selection2: { startDate: "start date input of selction 2", endDate: "end date input of selction 2" }
        },
        monthPicker: "month picker",
        yearPicker: "year picker",
        prevButton: "previous month button",
        nextButton: "next month button",
    }}
    dayContentRenderer={customDayContent}
    />
  );
};

export default AppDate;
