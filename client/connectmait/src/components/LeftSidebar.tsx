import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="fixed inset-y-16 left-0 bg-[#101117] w-64 h-full">
          <p className="text-white font-bold text-2xl ml-8">Mait-Connect</p>
          <div className="flex flex-col  justify-evenly">
            <Link to="/" className="mb-4">
              <div className=" flex flex-row items-center mt-16 ml-12 ">
                <img src="/home.svg" alt="" />
                <p className="font-bold text-xl text-white ml-4">Home</p>
              </div>
            </Link>
            <Link to="/" className="mb-4">
              <div className=" flex flex-row items-center mt-16 ml-12 ">
                <img src="/search.svg" alt="" />
                <p className="font-bold text-xl text-white ml-4">Search</p>
              </div>
            </Link>
            <Link to="/" className="mb-4">
              <div className=" flex flex-row items-center mt-16 ml-12 ">
                <img src="/community.svg" alt="" />
                <p className="font-bold text-xl text-white ml-4">
                  Notifications
                </p>
              </div>
            </Link>
            <Link to="/" className="mb-4">
              <div className=" flex flex-row items-center mt-16 ml-12 ">
                <img src="/create.svg" alt="" />
                <p className="font-bold text-xl text-white ml-4">QnA</p>
              </div>
            </Link>
            <Link to="/" className="mb-4">
              <div className=" flex flex-row items-center mt-16 ml-12 ">
                <img src="/user.svg" alt="" />
                <p className="font-bold text-xl text-white ml-4">Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 bg-[#101117] w-full h-16 lg:hidden">
        <div className="flex flex-row justify-evenly items-center">
          <div className="">
            <Link to="/" className="m-4">
              <div className="">
                <img src="/home.svg" alt="home logo" />
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/" className="m-4">
              <div className="">
                <img src="/search.svg" alt="home logo" />
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/" className="m-4">
              <div className="">
                <img src="/community.svg" alt="home logo" />
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/" className="m-4">
              <div className="">
                <img src="/create.svg" alt="home logo" />
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/" className="m-4">
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
