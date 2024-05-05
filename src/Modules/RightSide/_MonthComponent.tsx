import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { calenderCreator } from "@/utils/Date";
import { TodoType } from "@/utils/MakeTodo";
import {
  OnOpenModalForEditHandlerArgsType,
  OnOpenModalHandlerArgType,
} from "./Rightside";
export type MonthAndDayComponentPropsType = {
  currentDate: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
  onOpenModalHandler: (params: OnOpenModalHandlerArgType) => void;
  todos: TodoType;
  onOpenModalForEditHandler: ({
    Date,
    id,
  }: OnOpenModalForEditHandlerArgsType) => void;
};

export const MonthComponent: FunctionComponent<
  MonthAndDayComponentPropsType
> = ({
  currentDate,
  selectedDate,
  onOpenModalHandler,
  todos,
  onOpenModalForEditHandler,
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
                  onClick={() => {
                    if (day) {
                      onOpenModalHandler({ Date: day });
                    }
                  }}
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
                  <ul>
                    {" "}
                    {todos.map((todo) => {
                      if (
                        todo.Date.format("DD/MM/YYYY") !==
                        day?.format("DD/MM/YYYY")
                      )
                        return null;
                      return (
                        <li
                          onClick={(event) => {
                            event.stopPropagation();
                            onOpenModalForEditHandler({
                              Date: day,
                              id: todo.id,
                            });
                          }}
                          key={todo.id}
                          className="flex items-center gap-1"
                        >
                          <div
                            className="w-4 h-4 rounded-2xl"
                            style={{
                              backgroundColor: todo.category.color,
                            }}
                          ></div>
                          <p>{todo.title}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
