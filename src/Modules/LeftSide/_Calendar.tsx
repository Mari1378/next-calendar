import React, { FunctionComponent } from "react";
import { daysOfWeek } from "../../constants/DaysName";
import { v4 as uuid } from "uuid";
import { isToDay, calenderCreator } from "../../utils/Date";
import dayjs from "dayjs";

interface CalendarPropsType {
  currentDate: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
  onSelectedDay: (date: dayjs.Dayjs) => void;
}

export const Calendar: FunctionComponent<CalendarPropsType> = ({
  currentDate,
  selectedDate,
  onSelectedDay: onSelectedDayHandler,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        {daysOfWeek.map((day) => {
          return (
            <p
              className="w-8 h-8 flex justify-center items-center mb-2 text-gray-600"
              key={uuid()}
            >
              {day}
            </p>
          );
        })}
      </div>
      <div className="flex gap-2 flex-col">
        {calenderCreator(currentDate).map((week) => {
          return (
            <div className="flex justify-between" key={uuid()}>
              {week.map((dateObject) => {
                return (
                  <span
                    onClick={() => {
                      if (dateObject != null) onSelectedDayHandler(dateObject);
                    }}
                    className="w-8 h-8 flex justify-center items-center"
                    key={uuid()}
                    style={
                      dateObject != null
                        ? selectedDate.format("DD/MM/YYYY") ===
                          dateObject.format("DD/MM/YYYY")
                          ? { backgroundColor: "blue", borderRadius: "100%" }
                          : isToDay(dateObject)
                          ? { backgroundColor: "red", borderRadius: "100%" }
                          : {}
                        : {}
                    }
                  >
                    {dateObject != null ? dateObject.get("D") : null}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
