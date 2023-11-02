import React, { useContext } from "react";
import DraggableContent from "./DraggableContent";
import { AppContext } from "../AppContext";

export default function MainComponent() {
  const { selectedItem, setSelectedItem, contentData, setContentData } =
    useContext(AppContext);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      console.log(value);
    } else {
      console.log(value);
    }
  };

  const deleteItems = (data) => {
    let filterItem = contentData.filter((item) => !data.includes(item.img));
    setContentData(filterItem);
    setSelectedItem([]);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="mt-5 w-full lg:w-3/4 mx-auto">
        <div className="px-9 py-4 bg-white rounded-t-lg border-b-2 flex justify-between items-center">
          <div>
            {selectedItem && selectedItem.length ? (
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="default-checkbox"
                  type="checkbox"
                  value={selectedItem}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-black"
                >
                  {selectedItem.length} Files Selected
                </label>
              </div>
            ) : (
              <p className="text-2xl">Gallery</p>
            )}
          </div>
          <p
            className="text-red-600 cursor-pointer"
            onClick={() => deleteItems(selectedItem)}
          >
            delete files
          </p>
        </div>
        <DraggableContent />
      </div>
    </div>
  );
}
