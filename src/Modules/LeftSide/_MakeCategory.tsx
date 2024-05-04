import React, { FunctionComponent, useState } from "react";
import { Categories } from "./_Categories";
export type CategoryType = {
  title: string;
  id: string;
  color: string;
}[];
interface MakeCategoryPropsType {
  onAddCategoryHandler: (
    value: CategoryType[number]["title"],
    color: CategoryType[number]["color"]
  ) => void;
  category: CategoryType;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

export const MakeCategory: FunctionComponent<MakeCategoryPropsType> = ({
  onAddCategoryHandler,
  category,
  setCategory,
}) => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("#00FA6C");
  //   ...................................................

  const onDeleteCategoryHandler = (id: string) => {
    const newCategory = category.filter((item) => {
      return item.id !== id;
    });
    setCategory(newCategory);
  };

  // ......................................................
  return (
    <div className="mt-12 flex flex-col gap-4 text-gray-300">
      <p>Add Your Category</p>
      <div className=" flex gap-2 items-center">
        <input
          type="text"
          placeholder="inter your topic"
          className="bg-black border border-gray-400 px-2 h-8"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <input
          type="color"
          id="colorPicker"
          value={color}
          className="h-8"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </div>
      {category.length === 5 ? (
        <span className="text-red-600">You can have 5 categories</span>
      ) : null}
      <button
        onClick={() => {
          onAddCategoryHandler(value, color);
          setValue("");
          setColor("#00FA6C");
        }}
        className="bg-gray-400 rounded mb-8 px-2 h-8 text-gray-900 w-full"
      >
        Add Category
      </button>
      <ul className="flex flex-col gap-8">
        {category.map((item) => {
          return (
            <Categories
              key={item.id}
              id={item.id}
              title={item.title}
              color={item.color}
              onDeleteCategoryHandler={onDeleteCategoryHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};
