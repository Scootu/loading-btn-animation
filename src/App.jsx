import { useState } from "react";
import "./App.css";

function App() {
  const [clickElement, setClickElement] = useState("Save Change");
  const [changedClass, setChangedClass] = useState("save-btn");
  return (
    <button
      onClick={() => {
        setClickElement(<div className="loader"></div>);
        setTimeout(() => {
          setClickElement("Change Saved");
          setChangedClass("save-btn changed-btn");
        }, 2000);
      }}
      className={changedClass}
    >
      {clickElement}
    </button>
  );
}

export default App;
