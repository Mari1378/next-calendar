import React, { FunctionComponent, useState } from "react";
import { LeftSide } from "./LeftSide/LeftSide";
import { Rightside } from "./RightSide/Rightside";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";

interface HomeModulePropsType {}

export const HomeModule: FunctionComponent<HomeModulePropsType> = () => {
  const [currentDate, setCurrentDate] = useState(dayjs(new Date()));
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
  const [category, setCategory] = useState([
    { title: "general", id: uuid(), color: "#ff00a6" },
  ]);
  // ...................................................................
  const onAddCategoryHandler = (value: string, color: string) => {
    if (value) {
      if (category.length <= 4) {
        setCategory([...category, { title: value, id: uuid(), color: color }]);
      }
    }
  };

  // ....................................................................
  const onSelectedDayHandler = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
  };
  // ....................................................................
  return (
    <div className="flex h-full">
      <LeftSide
        currentDate={currentDate}
        selectedDate={selectedDate}
        onSelectedDay={onSelectedDayHandler}
        setCurrentDate={setCurrentDate}
        onAddCategoryHandler={onAddCategoryHandler}
        category={category}
        setCategory={setCategory}
      />
      <Rightside
        setCurrentDate={setCurrentDate}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        currentDate={currentDate}
        category={category}
      />
    </div>
  );
};
