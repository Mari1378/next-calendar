import { DeleteIcon } from "@/assets/icons/Icon";
import React, { FunctionComponent } from "react";
import { CategoryType } from "./_MakeCategory";
import { extend } from "dayjs";
type CategoryObjectType = CategoryType[number];
interface CategoriesPropsType extends CategoryObjectType {
  onDeleteCategoryHandler: (id: CategoryObjectType["id"]) => void;
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
