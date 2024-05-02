import { DeleteIcon } from "@/assets/icons/Icon";
import React, { FunctionComponent } from "react";

interface CategoriesPropsType {
  id: string;
  title: string;
  color: string;
  onDeleteCategoryHandler: (id: string) => void;
}

export const Categories: FunctionComponent<CategoriesPropsType> = ({
  id,
  title,
  color,
  onDeleteCategoryHandler,
}) => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          style={{ backgroundColor: `${color}` }}
          className="w-6 h-6 rounded-xl"
        ></div>
        <p>{title}</p>
      </div>
      <button
        className="text-2xl"
        onClick={() => {
          if (title !== "general") onDeleteCategoryHandler(id);
        }}
      >
        <DeleteIcon />
      </button>
    </li>
  );
};
