import React, { FunctionComponent } from "react";
import { MonthAndDayComponentPropsType } from "./_MonthComponent";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { difrenceBetweenTwoTime } from "@/utils/Date";

export const DayComponent: FunctionComponent<MonthAndDayComponentPropsType> = ({
  onOpenModalHandler,
  todos,
  selectedDate,
  onOpenModalForEditHandler,
}) => {
  const todosOnDay = todos.filter((todo) => {
    return todo.Date.format("DD/MM/YYYY") === selectedDate.format("DD/MM/YYYY");
  });
  const arrayOfTime = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  const onOpenModalInDayHandler = (startTime: string) => {
    const endTime =
      startTime === "23:00"
        ? "00:00"
        : `${String(Number(startTime.split(":")[0])).length === 1 ? "0" : ""}${
            Number(startTime.split(":")[0]) + 1
          }:00`;
    onOpenModalHandler({
      Date: selectedDate,
      startTime: startTime,
      endTime: endTime,
    });
  };
  return (
    <div className="relative">
      {arrayOfTime.map((time) => {
        return (
          <div
            className="flex h-[60px] cursor-pointer relative"
            key={uuid()}
            onClick={() => onOpenModalInDayHandler(time)}
          >
            <p className="px-4 -mt-4 text-lg text-slate-700">{time}</p>
            <div className="border-t border-gray-200 grow h-full"></div>
          </div>
        );
      })}
      {todosOnDay.map((todo) => {
        return (
          <div
            key={todo.id}
            onClick={() =>
              onOpenModalForEditHandler({ Date: selectedDate, id: todo.id })
            }
            className="bg-red-300 text-white absolute left-[78px] right-0"
            style={{
              height: `${difrenceBetweenTwoTime(
                todo.Date,
                todo.startTime,
                todo.endTime
              )}px`,
              top: `${
                Number(todo.startTime.split(":")[0]) * 60 +
                Number(todo.startTime.split(":")[1])
              }px`,
            }}
          >
            {todo.title}
          </div>
        );
      })}
    </div>
  );
};
