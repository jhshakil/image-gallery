import React, { useContext, useState } from "react";
import DraggableItem from "./DraggableItem";
import { FaRegImage } from "react-icons/fa";
import { AppContext } from "../AppContext";

export default function DraggableContent() {
  const { contentData, setContentData, selectedItem, setSelectedItem } =
    useContext(AppContext);

  const [dragStartIndex, setdragStartIndex] = useState(null);

  // get index of draged item
  const onDragStart = (index) => setdragStartIndex(index);

  // update list when item dropped
  const onDrop = (dropIndex) => {
    // get draged item
    const dragItem = contentData[dragStartIndex];

    // delete draged item in list
    let list = [...contentData];
    list.splice(dragStartIndex, 1);

    // update list
    if (dragStartIndex < dropIndex) {
      setContentData([
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length),
      ]);
    } else {
      setContentData([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length),
      ]);
    }
  };

  // checkbox event
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedItem([...selectedItem, value]);
    } else {
      setSelectedItem(selectedItem.filter((e) => e !== value));
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-9">
        {/* full draggable content */}
        {contentData.map((item, index) => (
          <div
            className={`${index === 0 ? "col-span-2 row-span-2" : ""} w-full`}
            key={`draggable_item-${index}`}
          >
            <DraggableItem
              key={index}
              index={index}
              onDragStart={(index) => onDragStart(index)}
              onDrop={(index) => onDrop(index)}
            >
              <div className="image-item border-2 border-gray-200 rounded-lg overflow-hidden relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-transparent hover:before:bg-gray-300 before:opacity-30">
                <img src={item.img} alt="item" />
                <input
                  checked={selectedItem.find((el) => el === item.img)}
                  id="default-checkbox"
                  type="checkbox"
                  value={item.img}
                  onChange={(e) => handleChange(e)}
                  className="checkbox-item w-4 h-4 z-20 absolute top-6 left-6 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>
              </div>
            </DraggableItem>
          </div>
        ))}

        {/* last add image section  */}
        <div className="image-item border-2 border-dashed border-gray-200 rounded-lg overflow-hidden relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-transparent hover:before:bg-gray-300 before:opacity-30">
          <div className="flex justify-center items-center h-full">
            <div>
              <FaRegImage
                className="mx-auto max-w-[1rem] md:max-w-[2rem]"
                size="2rem"
              />
              <p className="text-[10px] md:text-xl mt-1 md:mt-4">Add Images</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
