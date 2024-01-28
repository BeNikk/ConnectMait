import { Link, useLocation } from "react-router-dom";

export default function LeftSidebar() {
  const location = useLocation();

  return (
    <>
      <div className="hidden lg:block ">
        <div className="fixed inset-y-16 left-0  bg-black w-[20vw] h-full">
          <p className="text-[#2096b2] font-bold text-2xl ml-[20%]">
            Mait-Connect
          </p>
          <div className="flex flex-col justify-evenly">
            <Link to="/" className="mb-4">
              <div
                className={`flex flex-row items-center mt-16 ml-[20%] cursor-pointer ${
                  location.pathname === "/"
                    ? "bg-[#2096b2] h-16 w-[128px] rounded-xl"
                    : ""
                }`}
              >
                <img src="/home.svg" alt="" className="ml-2" />
                <p className="font-bold text-xl text-white ml-[5%]">Home</p>
              </div>
            </Link>
            <Link to="/search" className="mb-4">
              <div
                className={`flex flex-row items-center mt-16 ml-[20%] cursor-pointer ${
                  location.pathname === "/search"
                    ? "bg-[#2096b2] h-16 w-[128px] rounded-xl"
                    : ""
                }`}
              >
                <img src="/search.svg" alt="" className="ml-2" />
                <p className="font-bold text-xl text-white ml-[5%]">Search</p>
              </div>
            </Link>
            <Link to="/notifications" className="mb-4">
              <div
                className={`flex flex-row items-center mt-16 ml-[20%] cursor-pointer ${
                  location.pathname === "/notifications"
                    ? "bg-[#2096b2] h-16 w-[170px] rounded-xl"
                    : ""
                }`}
              >
                <img src="/community.svg" alt="" className="ml-2" />
                <p className="font-bold text-xl text-white ml-[5%]">
                  Notifications
                </p>
              </div>
            </Link>

            <Link to="/profile" className="mb-4">
              <div
                className={`flex flex-row items-center mt-16 ml-[20%] cursor-pointer ${
                  location.pathname === "/profile"
                    ? "bg-[#2096b2] h-16 w-[128px] rounded-xl"
                    : ""
                }`}
              >
                <img src="/user.svg" alt="" className="ml-2" />
                <p className="font-bold text-xl text-white ml-[5%]">Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="z-10 fixed inset-x-0 bottom-0 bg-[#101117] w-full h-16 lg:hidden">
        <div className="flex flex-row justify-evenly items-center">
          <div className="">
            <Link to="/" className="m-4">
              <div className="">
                <img src="/home.svg" alt="home logo" />
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/search" className="m-4">
              <div className="">
                <img src="/search.svg" alt="home logo" />
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/notifications" className="m-4">
              <div className="">
                <img src="/community.svg" alt="home logo" />
              </div>
            </Link>
          </div>

          <div className="">
            <Link to="/profile" className="m-4">
              <div className="">
                <img src="/user.svg" alt="home logo" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
