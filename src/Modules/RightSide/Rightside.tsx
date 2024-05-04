import React, { FunctionComponent, useReducer, useState } from "react";
import dayjs from "dayjs";
import { HeaderRightSide } from "./_HeaderRightSide";
import { MonthComponent } from "./_MonthComponent";
import { DayComponent } from "./_DayComponent";
import { TodoType, todoReducer } from "@/utils/MakeTodo";
import { Modal } from "./Modal/Modal";
import { v4 as uuid } from "uuid";
import { CategoryType } from "../LeftSide/_MakeCategory";

interface RightsidePropsType {
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  selectedDate: dayjs.Dayjs;
  currentDate: dayjs.Dayjs;
  category: CategoryType;
  onSelectedDay: (date: dayjs.Dayjs) => void;
}
export type OnOpenModalHandlerArgType = {
  Date: TodoType[number]["Date"];
  startTime?: TodoType[number]["startTime"];
  endTime?: TodoType[number]["endTime"];
};
export type OnOpenModalForEditHandlerArgsType = {
  Date: TodoType[number]["Date"];
  id: TodoType[number]["id"];
};
export type AddTodoHandlerType = {
  category: TodoType[number]["category"];
  endTime: TodoType[number]["endTime"];
  startTime: TodoType[number]["startTime"];
  title: TodoType[number]["title"];
};
const initialTodo: TodoType = [];
export const Rightside: FunctionComponent<RightsidePropsType> = ({
  setCurrentDate,
  setSelectedDate,
  selectedDate,
  currentDate,
  category,
  onSelectedDay: onSelectedDayHandler,
}) => {
  const [isMonth, setIsMonth] = useState(true);
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  const [dateForAddTask, setDateForAddTask] = useState<dayjs.Dayjs>();
  const [titleOfTaskForEdit, setTitleOfTaskForEdit] = useState("");
  const [startTodo, setStartTodo] = useState("08:00:00");
  const [endTodo, setendTodo] = useState("09:00:00");
  // ..................................................
  const addTodoHandler = ({
    category,
    endTime,
    startTime,
    title,
  }: AddTodoHandlerType) => {
    if (title && dateForAddTask) {
      dispatch({
        type: "ADD",
        payload: {
          id: uuid(),
          title: title,
          Date: dateForAddTask,
          category: category,
          startTime: startTime,
          endTime: endTime,
        },
      });
      setDateForAddTask(undefined);
      setStartTodo("08:00:00");
      setendTodo("09:00:00");
    }
  };
  const deleteTodoHandler = (dateTodo: dayjs.Dayjs) => {
    dispatch({
      type: "DELETE",
      payload: dateTodo,
    });
    setDateForAddTask(undefined);
    setTitleOfTaskForEdit("");
    setStartTodo("08:00:00");
    setendTodo("09:00:00");
  };
  const editTodoHandler = (dateTodo: dayjs.Dayjs, taskTitle: string) => {
    dispatch({
      type: "EDIT",
      payload: {
        Date: dateTodo,
        title: taskTitle,
      },
    });
    setDateForAddTask(undefined);
    setStartTodo("08:00:00");
    setendTodo("09:00:00");
  };
  // ..................................................

  const onOpenModalHandler = ({
    Date,
    startTime,
    endTime,
  }: OnOpenModalHandlerArgType) => {
    if (startTime && endTime) {
      setStartTodo(startTime);
      setendTodo(endTime);
    }
    setDateForAddTask(Date);
    if (Date != null) onSelectedDayHandler(Date);
  };
  const onOpenModalForEditHandler = ({
    Date,
    id,
  }: OnOpenModalForEditHandlerArgsType) => {
    setDateForAddTask(Date);
    const findTodos = todos.find((item) => {
      return item.id === id;
    });
    if (findTodos) {
      setTitleOfTaskForEdit(findTodos.title);
    }
  };
  // ..................................................
  const onMonthHandler = () => {
    setIsMonth(true);
  };
  const onDayHandler = () => {
    setIsMonth(false);
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
        <MonthComponent
          currentDate={currentDate}
          selectedDate={selectedDate}
          onOpenModalHandler={onOpenModalHandler}
          todos={todos}
          onOpenModalForEditHandler={onOpenModalForEditHandler}
        />
      ) : (
        <DayComponent />
      )}
      {dateForAddTask ? (
        <Modal
          setDateForAddTask={setDateForAddTask}
          addTodo={addTodoHandler}
          deleteTodo={deleteTodoHandler}
          category={category}
          editTodo={editTodoHandler}
          dateForAddTask={dateForAddTask}
          defaultInputValue={titleOfTaskForEdit ? titleOfTaskForEdit : ""}
          startTodo={startTodo}
          endTodo={endTodo}
          setStartTodo={setStartTodo}
          setendTodo={setendTodo}
          setTitleOfTaskForEdit={setTitleOfTaskForEdit}
        />
      ) : null}
    </div>
  );
};
