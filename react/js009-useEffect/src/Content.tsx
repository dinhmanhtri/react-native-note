import { useEffect, useState } from "react";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

const tabs: string[] = ["posts", "comments", "albums"];

export default function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [button, setButton] = useState("");

  /* Update DOM */
  // Callback sẽ được gọi sau khi render DOM
  useEffect(() => {
    document.title = title; //side effect
  });

  /* Call api using useEffect */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((item) => {
        setPosts(item as Post[]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (value: string) => {
    setButton(value);
  };

  return (
    <>
      <div className="card">
        <h2>Update DOM</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="card">
        {tabs.map((tab) => (
          <button onClick={() => handleClick(tab)}>{tab}</button>
        ))}
      </div>

      {/* <div className="card">
        <h2>Call api</h2>
        <ul>
          {posts.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
