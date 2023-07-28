import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function emitComment(id: number) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`group-${id}`, {
        detail: `Nội dung comment của group ${id}`,
      })
    );
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
