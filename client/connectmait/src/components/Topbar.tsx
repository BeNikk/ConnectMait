import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row items-center justify-evenly bg-black w-full h-16">
        <img src="/m-logo.avif" alt="m-logo" className="h-[50px] w-[50px]" />
        <div>
          {!localStorage.getItem("token") && (
            <div>
              <Button
                className="bg-[#1A8CD8] m-4"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </Button>
              <Button
                className="bg-[#1A8CD8] m-4"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Signin
              </Button>
            </div>
          )}
          {localStorage.getItem("token") && (
            <div>
              <Button
                className="bg-[#1A8CD8]"
                onClick={() => {
                  localStorage.setItem("token", "");
                  navigate("/signup");
                }}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
