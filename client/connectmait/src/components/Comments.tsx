import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Topbar from "./Topbar";
import RightSidebar from "./RightSidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";

export default function Comments() {
  const { id } = useParams();
  console.log(id);
  const [posts, setPost] = useState("");
  useEffect(() => {
    console.log("control was here");
    axios
      .get(`http://localhost:3000/post/${id}`)
      .then((res) => {
        setPost(res.data.postContent);
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
        <div className="relative ml-[10vw] mt-14 bg-[#101117] h-44 w-[80vw] lg:w-[40vw] lg:ml-[30vw]">
          <p className="text-white">{posts}</p>
        </div>
      </div>
      <div className="relative flex flex-col items-center w-[80vw] bg-[#101117]   hover:rounded-lg hover:border hover:border-white mt-4 ml-[10vw] h-[200px] lg:w-[40vw] lg:ml-[30vw]">
        <p className="font-bold mt-2 text-lg text-white lg:hidden">Comment!</p>

        <p className="font-bold mt-2 text-lg text-white lg:mb-8">
          Write Your comment
        </p>
        <div
          className="object-contain overflow-hidden mt-4 mr-[5%] w-[450px]"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
        >
          <Textarea
            className="bg-[#101117] ml-[10%] text-white h-[40%] w-[80%]"
            placeholder="Write"
          />
          <Button className="absolute bg-[#2096b2] right-4 bottom-2 lg:absolute lg:right-8 lg:bottom-4">
            comment!
          </Button>
        </div>
      </div>
      <RightSidebar />
    </>
  );
}
