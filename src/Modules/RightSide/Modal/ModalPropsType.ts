import { CategoryType } from "@/Modules/LeftSide/_MakeCategory";
import { TodoType } from "@/utils/MakeTodo";
import dayjs from "dayjs";

export type ModalPropsType = {
  category: CategoryType;
  setDateForAddTask: React.Dispatch<
    React.SetStateAction<dayjs.Dayjs | undefined>
  >;
  addTodo: (todo: TodoType[number]) => void;
  deleteTodo: (dateTodo: dayjs.Dayjs) => void;
  editTodo: (dateTodo: dayjs.Dayjs, taskTitle: string) => void;
  dateForAddTask: dayjs.Dayjs | undefined;
  defaultInputValue: string;
  startTodo: string;
  endTodo: string;
  setStartTodo: React.Dispatch<React.SetStateAction<string>>;
  setendTodo: React.Dispatch<React.SetStateAction<string>>;
  setTitleOfTaskForEdit: React.Dispatch<React.SetStateAction<string>>;
};
