import React, { FunctionComponent, useState } from "react";
import dayjs from "dayjs";
import { HeaderRightSide } from "./_HeaderRightSide";
import { MonthComponent } from "./_MonthComponent";
import { DayComponent } from "./_DayComponent";

interface RightsidePropsType {
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  selectedDate: dayjs.Dayjs;
  currentDate: dayjs.Dayjs;
}

export const Rightside: FunctionComponent<RightsidePropsType> = ({
  setCurrentDate,
  setSelectedDate,
  selectedDate,
  currentDate,
}) => {
  const [isMonth, setIsMonth] = useState(true);
  // ..................................................
  const onMonthHandler = () => {
    setIsMonth(true);
  };
  const onDayHandler = () => {
    setIsMonth(false);
    console.log("mari");
  };
  // ..................................................
  return (
    <div className="w-full h-screen flex flex-col overflow-auto ">
      <HeaderRightSide
        setCurrentDate={setCurrentDate}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        onMonthHandler={onMonthHandler}
        onDayHandler={onDayHandler}
      />
      {isMonth ? (
        <MonthComponent currentDate={currentDate} selectedDate={selectedDate} />
      ) : (
        <DayComponent />
      )}
    </div>
  );
};
