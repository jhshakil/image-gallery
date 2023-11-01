import "./App.css";
import DraggableContent from "./components/DraggableContent";

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mt-5">
          <div className="p-4 bg-white rounded-t-lg">
            <p>home page</p>
          </div>
          <DraggableContent />
        </div>
      </div>
    </>
  );
}

export default App;
