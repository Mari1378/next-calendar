import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
interface HeaderRightSidePropsType {
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  selectedDate: dayjs.Dayjs;
  onMonthHandler: () => void;
  onDayHandler: () => void;
}

export const HeaderRightSide: FunctionComponent<HeaderRightSidePropsType> = ({
  setCurrentDate,
  setSelectedDate,
  selectedDate,
  onMonthHandler,
  onDayHandler,
}) => {
  const onTodayHandler = () => {
    setCurrentDate(dayjs(new Date()));
    setSelectedDate(dayjs(new Date()));
  };
  // .......................................................
  return (
    <div className="p-5 h-20 flex justify-between items-center mb-8">
      <button
        className="bg-slate-100 text-xl h-12 py-2 px-4"
        onClick={onTodayHandler}
      >
        Today
      </button>
      <h2 className="text-xl text-gray-500 font-bold">
        {selectedDate.format("MMMM")} {selectedDate.format("DD")} ,{" "}
        {selectedDate.format("YYYY")}
      </h2>
      <div className="flex gap-0.5">
        <button
          className="border border-gray-200 rounded-l-lg px-5 py-1"
          onClick={onMonthHandler}
        >
          Month
        </button>
        <button
          className="border border-gray-200 rounded-r-lg px-5 py-1"
          onClick={onDayHandler}
        >
          Day
        </button>
      </div>
    </div>
  );
};
