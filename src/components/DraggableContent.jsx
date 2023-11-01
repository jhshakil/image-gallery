import React, { useState } from "react";
import { ItemList } from "../assets/js/itemList";
import DraggableItem from "./DraggableItem";

export default function DraggableContent() {
  const [data, setdata] = useState(ItemList);

  const [dragStartIndex, setdragStartIndex] = useState(null);

  // get index of draged item
  const onDragStart = (index) => setdragStartIndex(index);

  // update list when item dropped
  const onDrop = (dropIndex) => {
    // get draged item
    const dragItem = data[dragStartIndex];

    // delete draged item in list
    let list = [...data];
    list.splice(dragStartIndex, 1);

    // update list
    if (dragStartIndex < dropIndex) {
      setdata([
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length),
      ]);
    } else {
      setdata([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length),
      ]);
    }
  };
  return (
    <>
      <div className="grid grid-cols-5 gap-4 bg-white p-3">
        {data.map((item, index) => (
          <div
            className={`${index === 0 ? "col-span-2 row-span-2" : ""} w-full`}
          >
            <DraggableItem
              key={index}
              index={index}
              onDragStart={(index) => onDragStart(index)}
              onDrop={(index) => onDrop(index)}
            >
              <div className="border border-gray-200 rounded-lg overflow-hidden relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-transparent hover:before:bg-gray-300 before:opacity-30">
                <img src={item.img} alt="item" />
              </div>
            </DraggableItem>
          </div>
        ))}
        {/*
                add last item so you can drag item to last position
                last item dont need onDragStart because it can not be draged
            */}
        <DraggableItem
          key={data.length}
          index={data.length}
          draggale={false}
          onDrop={(index) => onDrop(index)}
        />
      </div>
    </>
  );
}
