import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { calenderCreator } from "@/utils/Date";
import { DiVim } from "react-icons/di";
interface MonthComponentPropsType {
  currentDate: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
}

export const MonthComponent: FunctionComponent<MonthComponentPropsType> = ({
  currentDate,
  selectedDate,
}) => {
  // ...................................
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "TuesDay",
    "Wednsday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  //   ....................................
  return (
    <div className="flex flex-col grow">
      <div className="flex">
        {dayOfWeek.map((day) => {
          return (
            <div
              className="border border-gray-200 w-full h-12 flex justify-center items-center font-bold text-gray-600 "
              key={uuid()}
            >
              {day}
            </div>
          );
        })}
      </div>
      {calenderCreator(currentDate).map((week) => {
        return (
          <div key={uuid()} className="flex h-full">
            {week.map((day) => {
              return (
                <div
                  key={uuid()}
                  className="text-l cursor-pointer text-gray-900 font-thin border border-gray-200  w-full flex items-center p-1 flex-col "
                >
                  <p
                    style={
                      day
                        ? selectedDate.format("DD/MM/YYYY") ===
                          day.format("DD/MM/YYYY")
                          ? {
                              backgroundColor: "blue",
                              borderRadius: "100%",
                              color: "white",
                            }
                          : {}
                        : {}
                    }
                    className="h-8 w-8 flex justify-center items-center"
                  >
                    {day ? day.get("D") : null}
                  </p>
                  <ul></ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
