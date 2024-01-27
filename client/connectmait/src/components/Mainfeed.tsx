import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useEffect, useState } from "react";
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

export default function Mainfeed() {
  const [postContent, setPosts] = useState("");
  const [feed, setFeed] = useState<Post[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/post").then((response) => {
      setFeed(response.data);
    });
  }, [postContent]);

  function Post() {
    const postData = { postContent: postContent };
    try {
      axios
        .post("http://localhost:3000/addPost", postData, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then(() => {
          alert("post added");
        });
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative flex flex-col items-center w-[80vw] bg-[#101117]   hover:rounded-lg hover:border hover:border-white mt-4 ml-[10vw] h-[200px] lg:w-[40vw] lg:ml-[30vw]">
          <p className="font-bold mt-2 text-lg text-white lg:hidden">
            Welcome to Mait connect!
          </p>

          <p className="font-bold mt-2 text-lg text-white lg:mb-8">
            Write Your Mind
          </p>
          <div
            className="object-contain overflow-hidden mt-4 mr-[5%] w-[450px]"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPosts(e.target.value);
            }}
          >
            <Textarea
              className="bg-[#101117] ml-[10%] text-white h-[40%] w-[80%]"
              placeholder="Write"
            />
            <Button
              className="absolute bg-[#7F75EC] right-4 bottom-2 lg:absolute lg:right-8 lg:bottom-4"
              onClick={Post}
            >
              Post
            </Button>
          </div>
        </div>
        {feed &&
          feed.map((f) => {
            return (
              <div className="relative ml-[10vw] mt-14 bg-[#101117] h-44 w-[80vw] lg:w-[40vw] lg:ml-[30vw]">
                <p className="absolute font-bold left-4 top-2 mb-4 text-[#7F75EC]">
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
                <img
                  src="/reply.svg"
                  alt=""
                  className="absolute ml-4 left-8 bottom-4"
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
