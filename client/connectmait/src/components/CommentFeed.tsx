import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  _id: string;
  username: string;
}
interface id {
  id: string;
}

interface commentfeed {
  text: string;
  postedBy: User;
}

export default function CommentFeed({ id }: id) {
  const [comment, setComment] = useState<commentfeed[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/post/comment/${id}`)
      .then((res) => {
        setComment(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log("axios error", e);
      });
  }, []);
  return (
    <>
      <div className="mt-12  ">
        {comment.map((f) => {
          return (
            <div
              className={`relative flex flex-col ml-[10vw] mt-14 mb-12 bg-[#101117] rounded-lg w-[80vw] lg:w-[40vw] lg:ml-[30vw] ${
                f.text && f.text.length > 65
                  ? "min-h-[50rem] lg:min-h-[40rem]"
                  : "min-h-50 lg:min-h-40"
              }`}
            >
              {" "}
              {f.text && (
                <div>
                  <div>
                    <div className="absolute w-8 h-8 left-2 top-2 rounded-full bg-[#1A8CD8] text-white flex items-center justify-center">
                      {f.postedBy.username[0].toUpperCase()}
                    </div>
                    <p className="absolute font-bold left-12 top-4 mb-4 text-[#1A8CD8]">
                      {f.postedBy.username}
                    </p>
                  </div>

                  <div className="absolute top-20 left-4 text-white font-bold ">
                    {f.text}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
