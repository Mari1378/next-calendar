import { CategoryType } from "@/Modules/LeftSide/_MakeCategory";
import dayjs from "dayjs";

export type TodoType = {
  id: string;
  title: string;
  Date: dayjs.Dayjs;
  category: CategoryType[number];
  startTime: string;
  endTime: string;
}[];
type TodoActionType =
  | {
      type: "ADD";
      payload: TodoType[number];
    }
  | {
      type: "DELETE";
      payload: Pick<TodoType[number], "Date">["Date"];
    }
  | {
      type: "EDIT";
      payload: Pick<TodoType[number], "Date" | "title">;
    };

export const todoReducer = (
  prevTodo: TodoType,
  action: TodoActionType
): TodoType => {
  switch (action.type) {
    case "ADD": {
      return [...prevTodo, action.payload];
    }
    case "DELETE": {
      return prevTodo.filter((todo) => {
        todo.Date.format("DD/MM/YYYY") !== action.payload.format("DD/MM/YYYY");
      });
    }
    case "EDIT": {
      return prevTodo.map((todo) => {
        return todo.Date.format("DD/MM/YYYY") ===
          action.payload.Date.format("DD/MM/YYYY")
          ? { ...todo, title: action.payload.title }
          : todo;
      });
    }
    default:
      return prevTodo;
  }
};
