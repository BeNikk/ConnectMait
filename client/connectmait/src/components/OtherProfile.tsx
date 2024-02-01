import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Topbar from "./Topbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function OtherProfile() {
  const { otherUserName } = useParams();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/otherProfile/${otherUserName}`)
      .then((resp) => {
        setUserName(resp.data.username);
        setEmail(resp.data.email);
        setAbout(resp.data.about);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  return (
    <>
      {userName && (
        <div className="flex flex-row justify-center relative">
          <div className="absolute bg-[#101117] w-[70vw] h-[40vh] top-24 lg:top-32 lg:w-[40vw] lg:h-[50vh]">
            <div className="relative ">
              <div className="bg-[#1A8CD8] text-center flex items-center justify-center rounded-full w-16 h-16 absolute left-2 top-2 lg:left-4">
                <div className="font-bold text-white">
                  {userName[0].toUpperCase()}
                </div>
              </div>
              <div className="absolute left-24 top-6 font-bold text-white">
                {userName}
              </div>
              <div className="absolute left-4 font-bold text-white top-24 lg:top-32">
                Email
              </div>
              <div className="absolute left-20 top-24 lg:top-32 font-bold text-white">
                {email}
              </div>
              <div className="absolute left-4 font-bold text-white top-32 lg:top-44">
                About
              </div>
              <div className="absolute left-20 top-32 lg:top-44 font-bold text-white">
                {about}
              </div>
            </div>
          </div>
        </div>
      )}
      <Topbar />
      <LeftSidebar />
      <RightSidebar />
    </>
  );
}
