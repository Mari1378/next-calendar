import React, { FunctionComponent, useState } from "react";
import dayjs from "dayjs";
import { ModalPropsType } from "./ModalPropsType";
import { CloseIcon, DeleteIcon } from "@/assets/icons/Icon";

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
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const [selectedCategory, setSelectedCategory] = useState();
  // ............................................
  const onCloseModalHandler = () => {
    setDateForAddTask(undefined);
    setInputValue("");
  };

  // ............................................
  return (
    <div className="fixed shadow-2xl inset-y-1/4 inset-x-[550px] text-gray-600 flex gap-2 flex-col bg-white w-[320px] h-[400px] rounded-lg">
      <div className="flex justify-between items-center w-full bg-gray-100 h-12 text-2xl text-gray-500">
        {defaultInputValue ? (
          <button
            onClick={() => {
              if (dateForAddTask) {
                deleteTodoHandler(dateForAddTask);
              }
            }}
            className="px-4 py-2"
          >
            <DeleteIcon />
          </button>
        ) : null}
        <button className="px-4 py-2" onClick={onCloseModalHandler}>
          <CloseIcon />
        </button>
      </div>
      <div className="p-5">
        <input
          className="pt-3 border-0 text-gray-600 text-2xl pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Add title"
        />
      </div>
      <div className="px-5  text-lg mb-4">
        <p className="mb-2">Select the topic</p>
        <div className="flex gap-2">
          {category.map((item) => {
            return (
              <button
                onClick={() => setSelectedCategory(item)}
                className="w-8 h-8 rounded-2xl"
                key={item.id}
                style={{
                  backgroundColor: item.color,
                  border:
                    item.id === selectedCategory.id
                      ? "1px solid #000000"
                      : "none",
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
