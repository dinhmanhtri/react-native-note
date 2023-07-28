import { useEffect, useState } from "react";
import "./App.css";
const groups = [
  {
    id: 1,
    name: "Group1",
  },
  {
    id: 2,
    name: "Group2",
  },
  {
    id: 3,
    name: "Group3",
  },
];

function Content() {
  const [groupId, setGroupId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`group-${groupId}`, handleComment);
    return () => {
      window.removeEventListener(`group-${groupId}`, handleComment);
    };
  }, [groupId]);

  return (
    <>
      <div className="card">
        {groups.map((group) => (
          <li
            key={group.id}
            style={{ color: group.id == groupId ? "red" : "#333" }}
            onClick={() => setGroupId(group.id)}
          >
            {group.name}
          </li>
        ))}
      </div>
    </>
  );
}

export default Content;
