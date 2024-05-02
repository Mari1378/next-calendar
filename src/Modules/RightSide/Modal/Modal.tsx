import React, { FunctionComponent, useState } from "react";
import dayjs from "dayjs";
import { ModalPropsType } from "./ModalPropsType";

// interface ModalPropsType {
//   category: {
//     title: string;
//     id: string;
//     color: string;
//   }[];
//   setDateForAddTask: React.Dispatch<React.SetStateAction<undefined>>;
//   addTodo: (
//     startTodo: string,
//     endTodo: string,
//     taskTitle: string,
//     category: string,
//     Date: dayjs.Dayjs
//   ) => void;
//   deleteTodo: (dateTodo: dayjs.Dayjs) => void;
//   editTodo: (dateTodo: dayjs.Dayjs, taskTitle: string) => void;
//   dateForAddTask: never;
//   defaultInputValue: string;
//   startTodo: string;
//   endTodo: string;
//   setStartTodo: React.Dispatch<React.SetStateAction<string>>;
//   setendTodo: React.Dispatch<React.SetStateAction<string>>;
//   setTitleOfTaskForEdit: React.Dispatch<React.SetStateAction<string>>;
// }

export const Modal: FunctionComponent<ModalPropsType> = ({
  category,
  setDateForAddTask,
  addTodo: addTodoHandler,
  deleteTodo: deleteTodoHandler,
  editTodo: editTodoHandler,
  dateForAddTask,
  defaultInputValue,
  startTodo,
  endTodo,
  setStartTodo,
  setendTodo,
  setTitleOfTaskForEdit,
}) => {
  const [inputValue, setInputValue] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <div className="fixed shadow-2xl inset-y-1/4 inset-x-[550px] text-gray-600 flex gap-2 flex-col bg-white w-[320px] h-[400px] rounded-lg">
      Modal
    </div>
  );
};
