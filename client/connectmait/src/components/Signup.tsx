import { TextField } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Signup() {
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
              placeholder="Username"
              className="w-full h-full"
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
            />
          </div>
          <div className="mt-16 ml-24">
            <Button variant="outline" className="bg-black text-white">
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
