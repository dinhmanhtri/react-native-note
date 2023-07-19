import { useEffect, useState } from "react";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

interface FileContent extends File {
  preview?: string;
}

const tabs: string[] = ["posts", "comments", "albums"];

export default function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [type, setType] = useState("");
  const [showGotoTop, setShowGotoTop] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const [countDown, setCountDown] = useState(180);
  const [avatar, setAvatar] = useState<FileContent>();

  /* Update DOM */
  // Callback sẽ được gọi sau khi render DOM
  useEffect(() => {
    document.title = title; //side effect
  });

  /* Call api using useEffect */
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((item) => {
        setPosts(item as Post[]);
      })
      .catch((err) => console.log(err));
  }, [type]);

  /*useEffect with DOM events */
  useEffect(() => {
    const handleScroll = () => {
      setShowGotoTop(window.scrollY >= 200);
    };

    const handleResize = () => {
      setSize(window.innerWidth);
    };

    const isInterval = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(isInterval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      console.log("Remove event listener");
    };
  }, []);

  /* Preview avatar */
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview!);
    };
  }, [avatar]);

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file: FileContent = (target.files as FileList)[0];

    file.preview = URL.createObjectURL(file);
    setAvatar(file);
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
        <h2>Resize: {size}</h2>
        <h2>Count down: {countDown}</h2>
      </div>

      <div className="card">
        <h2>Preview avartar</h2>
        <input
          type="file"
          onChange={(e) => {
            handleChangeAvatar(e);
          }}
        />
        {avatar && <img src={avatar.preview} />}
      </div>

      <div className="card">
        <h2>Call api</h2>
        {tabs.map((tab) => (
          <button
            key={tab}
            style={
              type === tab ? { color: "#fff", backgroundColor: "#333" } : {}
            }
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="card">
        <ul>
          {posts.map((post) => (
            <li>{post.title || post.body}</li>
          ))}
        </ul>
      </div>

      {showGotoTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </>
  );
}
