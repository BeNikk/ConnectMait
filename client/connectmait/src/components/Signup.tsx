import { TextField } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
const schema = z.object({
  username: z.string().min(3).max(100),
  password: z.string().min(6).max(100),
  email: z.string().email("invalid email format"),
});

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [username, setUsername] = useState("");
  async function CreateAccount() {
    const postData = { username, email, password };
    const data = schema.parse(postData);

    try {
      const response = await axios.post("https://connect-mait.vercel.app/signup", data);
      if (response && response.data) {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        if (response.data != "user already exists") {
          navigate("/");
        } else {
          alert("email already registered");
          navigate("/signin");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  return (
    <>
      <div className="flex flex-row h-screen justify-center">
        <div className="flex flex-col rounded-2xl w-[400px] h-[665px] mt-[5%]  bg-white p-4">
          <img
            src="/m-logo.avif"
            alt="m logo"
            className="w-[50px] h-[50px] ml-4 mt-[32px]"
          />
          <p className="text-md font-semi-bold mt-4 ml-4">
            Create Your Account
          </p>
          <p className="text-[#656565] ml-4 mt-2">
            to continue to Mait-connect
          </p>
          <p className="font-semi-bold text-[#656565] text-md ml-4 mt-8">
            UserName
          </p>
          <div className="ml-4 mt-2 w-[300px] h-[16px]">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              placeholder="Username (minimum 3 lettered)"
              className="w-full h-full"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />
          </div>
          <p className="font-semi-bold text-[#656565] text-md ml-4 mt-16">
            Email
          </p>
          <div className="ml-4 mt-2 w-[300px] h-[16px]">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              placeholder="someone@example.com"
              className="w-full h-full"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <p className="font-semi-bold mt-16 ml-4 text-[#656565]">Password</p>
          <div className="ml-4 mt-2 w-[300px] h-[16px]">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              placeholder="password"
              className="w-full h-full"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className="mt-16 ml-24">
            <Button
              variant="outline"
              className="bg-black text-white"
              onClick={CreateAccount}
            >
              Create Account
            </Button>
          </div>
          <p className="text-[#656565] font-sm mt-4 ml-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-black font-semi-bold">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
