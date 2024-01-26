import LeftSidebar from "./LeftSidebar";
import Mainfeed from "./Mainfeed";
import RightSidebar from "./RightSidebar";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="flex flex-row">
        <LeftSidebar />
        <Mainfeed />
        <RightSidebar />
      </div>
    </>
  );
}
