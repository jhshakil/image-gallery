import { useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { ItemList } from "./assets/js/itemList";
import MainComponent from "./components/MainComponent";

function App() {
  const [contentData, setContentData] = useState(ItemList);
  const [selectedItem, setSelectedItem] = useState([]);
  return (
    <>
      <AppContext.Provider
        value={{ contentData, setContentData, selectedItem, setSelectedItem }}
      >
        <MainComponent />
      </AppContext.Provider>
    </>
  );
}

export default App;
