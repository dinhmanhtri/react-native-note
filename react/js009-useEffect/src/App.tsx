import { useState } from "react";
import Content from "./Content";
import "./App.css";

function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </>
  );
}

export default App;
