import React, { FunctionComponent } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/Icon";
import { Calendar } from "./_Calendar";
import dayjs from "dayjs";
import { CategoryType, MakeCategory } from "./_MakeCategory";

interface LeftSidePropsType {
  currentDate: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
  onSelectedDay: (date: dayjs.Dayjs) => void;
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  onAddCategoryHandler: (
    value: CategoryType[number]["title"],
    color: CategoryType[number]["color"]
  ) => void;
  category: CategoryType;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

export const LeftSide: FunctionComponent<LeftSidePropsType> = ({
  currentDate,
  selectedDate,
  onSelectedDay: onSelectedDayHandler,
  setCurrentDate,
  onAddCategoryHandler,
  category,
  setCategory,
}) => {
  // ................................................
  const onGoToNextMonthHandler = () => {
    setCurrentDate((prevDate) => prevDate.set("month", prevDate.month() + 1));
  };
  const onGoToPrevMonthHandler = () => {
    setCurrentDate((prevDate) => prevDate.set("month", prevDate.month() - 1));
  };
  // ...........................................................
  return (
    <div className="h-screen p-4 w-[350px] bg-black text-white overflow-auto">
      <div className="flex justify-between items-center mb-8">
        <p className="font-bold text-2xl  ml-[6px]">
          {currentDate.format("MMMM")} - {currentDate.format("YYYY")}
        </p>
        <div className="flex gap-2">
          <div className="cursor-pointer" onClick={onGoToPrevMonthHandler}>
            <ArrowLeftIcon />
          </div>
          <div className="cursor-pointer" onClick={onGoToNextMonthHandler}>
            <ArrowRightIcon />
          </div>
        </div>
      </div>
      <Calendar
        currentDate={currentDate}
        selectedDate={selectedDate}
        onSelectedDay={onSelectedDayHandler}
      />
      <MakeCategory
        onAddCategoryHandler={onAddCategoryHandler}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
};
