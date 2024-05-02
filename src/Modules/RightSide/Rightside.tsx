import React, { FunctionComponent, useReducer, useState } from "react";
import dayjs from "dayjs";
import { HeaderRightSide } from "./_HeaderRightSide";
import { MonthComponent } from "./_MonthComponent";
import { DayComponent } from "./_DayComponent";
import { TodoType, todoReducer } from "@/utils/MakeTodo";
import { Modal } from "./Modal/Modal";

interface RightsidePropsType {
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  selectedDate: dayjs.Dayjs;
  currentDate: dayjs.Dayjs;
  category: {
    title: string;
    id: string;
    color: string;
  }[];
}
const initialTodo: TodoType = [];
export const Rightside: FunctionComponent<RightsidePropsType> = ({
  setCurrentDate,
  setSelectedDate,
  selectedDate,
  currentDate,
  category,
}) => {
  const [isMonth, setIsMonth] = useState(true);
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  const [dateForAddTask, setDateForAddTask] = useState();
  const [titleOfTaskForEdit, setTitleOfTaskForEdit] = useState("");
  const [startTodo, setStartTodo] = useState("08:00:00");
  const [endTodo, setendTodo] = useState("09:00:00");
  // ..................................................
  const addTodoHandler = (
    startTodo: string,
    endTodo: string,
    taskTitle: string,
    category: string,
    Date: dayjs.Dayjs
  ) => {
    if (taskTitle) {
      dispatch({
        type: "ADD",
        payload: {
          id: uuid(),
          title: taskTitle,
          Date: dateForAddTask,
          category: category,
          startTime: startTodo,
          endTime: endTodo,
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
        <MonthComponent currentDate={currentDate} selectedDate={selectedDate} />
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
