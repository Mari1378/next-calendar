import dayjs from "dayjs";

export type ModalPropsType = {
  category: {
    title: string;
    id: string;
    color: string;
  }[];
  setDateForAddTask: React.Dispatch<React.SetStateAction<undefined>>;
  addTodo: (
    startTodo: string,
    endTodo: string,
    taskTitle: string,
    category: string,
    Date: dayjs.Dayjs
  ) => void;
  deleteTodo: (dateTodo: dayjs.Dayjs) => void;
  editTodo: (dateTodo: dayjs.Dayjs, taskTitle: string) => void;
  dateForAddTask: never;
  defaultInputValue: string;
  startTodo: string;
  endTodo: string;
  setStartTodo: React.Dispatch<React.SetStateAction<string>>;
  setendTodo: React.Dispatch<React.SetStateAction<string>>;
  setTitleOfTaskForEdit: React.Dispatch<React.SetStateAction<string>>;
};
