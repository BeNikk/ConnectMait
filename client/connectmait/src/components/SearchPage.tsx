import { ChangeEvent, useState } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Topbar from "./Topbar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import axios from "axios";

export default function SearchPage() {
  const [UserName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [about, setAbout] = useState(null);
  return (
    <>
      <Topbar />
      <LeftSidebar />
      <RightSidebar />

      <div className="flex flex-row justify-center relative">
        <div className="absolute bg-[#101117] w-[70vw] h-[35vh] top-24 lg:top-32 lg:w-[40vw] lg:h-[35vh]">
          <div className="relative ">
            <p className="absolute top-2 left-[40%] text-white font-bold">
              Search
            </p>
            <div
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value);
              }}
            >
              <Textarea
                className="absolute top-12 left-8 lg:left-16 w-3/4 h-12 text-white"
                placeholder="search by username"
              />
            </div>

            <Button
              className="absolute top-32 right-12 bg-[#1A8CD8] rounded-lg"
              onClick={() => {
                axios
                  .get(
                    `https://connect-mait.vercel.app/otherProfile/${UserName}`
                  )
                  .then((resp) => {
                    setUser(resp.data.username);
                    setUserEmail(resp.data.email);
                    setAbout(resp.data.about);
                  });
              }}
            >
              Search
            </Button>
          </div>
        </div>
        {user && (
          <div className="flex flex-col justify-center relative">
            <div className="absolute bg-[#101117] w-[70vw] h-[40vh] top-80 lg:top-80 lg:w-[40vw] lg:h-[50vh]">
              <div className="relative ">
                <div className="bg-[#1A8CD8] text-center flex items-center justify-center rounded-full w-16 h-16 absolute left-2 top-2 lg:left-4">
                  <div className="font-bold text-white"></div>
                </div>
                <br />
                <div className="absolute left-12 lg:left-24 top-6 font-bold text-white">
                  {user}
                </div>
                <div className="absolute left-4 font-bold text-white top-24 lg:top-32">
                  Email
                </div>
                <br />
                <div className="absolute left-12 lg:left-20 top-24 lg:top-32 font-bold text-white">
                  {userEmail}
                </div>
                <div className="absolute left-4 font-bold text-white top-32 lg:top-44">
                  About
                </div>
                <br />
                <div className="absolute left-12 lg:left-20 top-32 lg:top-44 font-bold text-white">
                  {about}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!user && (
        <div className="flex flex-row justify-center relative">
          <div className="absolute bg-[#101117] w-[90vw] h-[10vh] top-80 lg:top-80 lg:w-[40vw] lg:h-[10vh]">
            <div className="relative ">
              <div className=" absolute left-8 lg:left-64 font-bold text-white">
                User not found
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
