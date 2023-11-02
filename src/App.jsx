import "./App.css";
import DraggableContent from "./components/DraggableContent";

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mt-5 w-full lg:w-3/4 mx-auto">
          <div className="px-9 py-4 bg-white rounded-t-lg border-b-2 flex justify-between items-center">
            <div>
              <p className="text-2xl">Gallery</p>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-black"
                >
                  Files Selected
                </label>
              </div>
            </div>
            <p className="text-red-600">delete files</p>
          </div>
          <DraggableContent />
        </div>
      </div>
    </>
  );
}

export default App;
