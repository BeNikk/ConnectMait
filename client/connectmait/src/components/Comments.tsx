import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Topbar from "./Topbar";
import RightSidebar from "./RightSidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";
import CommentFeed from "./CommentFeed";
interface User {
  _id: string;
  username: string;
}
interface Post {
  _id: string;
  postContent: string;
  image: string;
  userId: User;
}

export default function Comments() {
  const { id } = useParams();
  const [feed, setFeed] = useState<Post>();
  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log("control was here");
    axios
      .get(`http://localhost:3000/post/${id}`)
      .then((res) => {
        console.log(res.data);
        setFeed(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Topbar />
      <LeftSidebar />

      <div className="">
        {feed && (
          <div
            className={`relative flex flex-col ml-[10vw] mt-14 mb-12 bg-[#101117] rounded-lg w-[80vw] lg:w-[40vw] lg:ml-[30vw]  ${
              feed.image
                ? "min-h-[40rem] lg:min-h-[40rem]"
                : "min-h-40 lg:min-h-40"
            } ${
              feed.postContent && feed.postContent.length > 65
                ? "min-h-[50rem] lg:min-h-[40rem]"
                : "min-h-50 lg:min-h-40"
            }`}
            key={feed._id}
          >
            {feed && (
              <div>
                <div className="absolute w-8 h-8 left-2 top-2 rounded-full bg-[#1A8CD8] text-white flex items-center justify-center">
                  {feed.userId.username[0].toUpperCase()}
                </div>
                <p className="absolute font-bold left-12 top-4 mb-4 text-[#1A8CD8]">
                  {feed.userId.username}
                </p>{" "}
                <p className="text-white absolute top-20 left-8">
                  {feed.postContent}
                </p>
              </div>
            )}
            {feed.image && (
              <img
                src={feed.image}
                alt=""
                className="absolute top-28 object-cover"
              />
            )}
          </div>
        )}
      </div>

      <div className="relative flex flex-col items-center w-[80vw] bg-[#101117]   hover:rounded-lg hover:border hover:border-white mt-4 ml-[10vw] h-[200px] lg:w-[40vw] lg:ml-[30vw]">
        <p className="font-bold mt-2 text-lg text-white lg:hidden">Comment!</p>

        <p className="font-bold mt-2 text-lg text-white lg:mb-8">
          Write Your comment
        </p>
        <div
          className="object-contain overflow-hidden mt-4 mr-[5%] w-[450px]"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setComment(e.target.value);
          }}
        >
          <Textarea
            className="bg-[#101117] ml-[10%] text-white h-[40%] w-[80%]"
            placeholder="Write"
          />
          <Button
            className="absolute bg-[#1A8CD8] right-4 bottom-2 lg:absolute lg:right-8 lg:bottom-4"
            onClick={() => {
              if (comment == "") {
                alert("add comment!");
              } else {
                const PostData = { text: comment };
                axios
                  .post(
                    `http://localhost:3000/posts/comments/${id}`,
                    PostData,
                    {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                        "Content-Type": "application/json",
                      },
                    }
                  )
                  .then(() => {
                    alert("comment added");
                  })
                  .catch((e) => {
                    console.log("some error occured", e);
                  });
              }
            }}
          >
            comment!
          </Button>
        </div>
      </div>

      <RightSidebar />
      <CommentFeed />
    </>
  );
}
