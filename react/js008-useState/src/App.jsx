import { useState } from "react";
import "./App.css";

const nums = [100, 200, 300];
const gifts = ["CPU i9", "RAM 32gb rgb", "RGB keyboard", "RTX3060"];
const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  /* count */
  const [count, setCount] = useState(() => {
    // Giá trị khởi tạo là tổng các giá trị trong mảng cho trc
    const total = nums.reduce((total, cur) => total + cur);
    return total;
  }); // pass callback to initial state

  const handleClick = () => {
    setCount((prevState) => prevState + 1); // pass callback to setCount()
    // setCount(count + 1);
  };

  /* random gifts */
  const [gift, setGift] = useState(); // initial = undefined

  const handleGift = () => {
    const indexGifts = Math.floor(Math.random() * gifts.length);
    setGift(gifts[indexGifts]);
  };

  /* Two-way binding */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [radChecked, setRadChecked] = useState(1);
  const [boxChecked, setBoxChecked] = useState([]);

  const handleSubmit = () => {
    // CALL API
    console.log({ name, email, id: radChecked, ids: boxChecked });
  };

  const handleChecked = (id) => {
    setBoxChecked((prev) => {
      const inChecked = boxChecked.includes(id);
      if (inChecked) {
        return boxChecked.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <>
      {/* count */}
      <h2>React</h2>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>

      {/* random gifts */}
      <h2>{gift ?? "Chưa có phần thưởng"}</h2>
      <div className="card">
        <button onClick={handleGift}>Lấy thưởng</button>
      </div>

      {/* two-way binding */}
      <h2>Two way binding</h2>
      <div>
        <label>Text box</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <label>Radio</label>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={radChecked === course.id}
            onChange={() => setRadChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <label>Check box</label>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={boxChecked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <div className="card">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
