import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [clickElement, setClickElement] = useState("Save Change");

  return (
    <button
      onClick={() => {
        setClickElement(<div className="loader"></div>);
        setTimeout(() => {
          setClickElement("Change Saved");
        }, 2000);
      }}
      className="save-btn"
    >
      {clickElement}
    </button>
  );
}

export default App;
