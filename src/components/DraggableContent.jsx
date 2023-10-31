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
      <ul>
        {data.map((item, index) => (
          <DraggableItem
            key={index}
            index={index}
            onDragStart={(index) => onDragStart(index)}
            onDrop={(index) => onDrop(index)}
          >
            <img src={item.img} width="30px" alt="item" />
          </DraggableItem>
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
      </ul>
    </>
  );
}
