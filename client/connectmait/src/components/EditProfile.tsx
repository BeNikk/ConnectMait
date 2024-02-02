import { ChangeEvent, useState } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Topbar from "./Topbar";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");

  return (
    <>
      <LeftSidebar />
      <RightSidebar />
      <Topbar />
      <div className="flex flex-row justify-center relative">
        <div className="absolute bg-[#101117] w-[70vw] h-[65vh] top-24 lg:top-32 lg:w-[40vw] lg:h-[50vh]">
          <div className="relative ">
            <p className="absolute left-4 font-bold top-2 text-white">
              Edit profile
            </p>
            <div
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
              }}
            >
              <p className="absolute left-4 font-bold top-20 text-white">
                Username
              </p>
              <Textarea
                placeholder="username"
                className="absolute text-white top-28 w-3/4 left-8"
              />
            </div>
            <div
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            >
              <p className="absolute left-4 font-bold top-44 text-white">
                email
              </p>
              <Textarea
                placeholder="email"
                className="text-white absolute top-52 w-3/4 left-8"
              />
            </div>
            <div
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setAbout(e.target.value);
              }}
            >
              <p className="absolute left-4 font-bold top-72 text-white">
                About
              </p>
              <Textarea
                placeholder="about"
                className="absolute top-80 w-3/4 left-8 text-white"
              />
            </div>
            <Button
              className="absolute top-96 right-8 bg-[#1A8CD8]"
              onClick={() => {
                axios
                  .put(
                    "https://connect-mait.vercel.app/editProfile",
                    { username, email, about },
                    {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                      },
                    }
                  )
                  .then(() => {
                    alert("profile updated");
                    navigate("/profile");
                  })
                  .catch((e) => {
                    alert("error updating profile");
                    console.log(e);
                  });
              }}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
