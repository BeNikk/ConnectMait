import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface User {
  _id: string;
  username: string;
}
interface Post {
  _id: string;
  postContent: string;
  userId: User;
}
export default function PostFeed() {
  const navigate = useNavigate();
  const [feed, setFeed] = useState<Post[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/post").then((response) => {
      setFeed(response.data);
    });
  }, [feed]);

  return (
    <>
      {feed &&
        feed.map((f) => {
          return (
            <>
              <div
                className="relative ml-[10vw] mt-14 bg-[#101117] h-44 w-[80vw] lg:w-[40vw] lg:ml-[30vw]"
                key={f._id}
              >
                <div className="absolute w-8 h-8 left-2 top-2 rounded-full bg-[#1A8CD8] text-white flex items-center justify-center">
                  {f.userId.username[0].toUpperCase()}
                </div>
                <p className="absolute font-bold left-12 top-4 mb-4 text-[#1A8CD8]">
                  {f.userId.username}
                </p>

                <p className="overflow-hidden absolute left-4 bottom-24 text-white">
                  {f.postContent}{" "}
                </p>
                <img
                  src="/heart-gray.svg"
                  alt=""
                  className="absolute left-4 bottom-4"
                />
                <div
                  className="cursor-pointer hover:bg-[#2096b2]"
                  onClick={() => {
                    navigate(`/comment/${f._id}`);
                  }}
                >
                  <img
                    src="/reply.svg"
                    alt=""
                    className="absolute ml-4 left-8 bottom-4"
                  />
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
