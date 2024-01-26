import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
export default function Mainfeed() {
  return (
    <>
      <div className="hidden lg:flex w-[1000px] h-36 fixed flex flex-col bg-[#101117] ml-[20%] mt-12">
        <p className="text-white font-semi-bold text-xl ml-4 mt-2">
          What is happening?
        </p>
        <div className="w-[700px]">
          <Textarea
            className="mt-4 ml-32 text-white w-full"
            placeholder="Write your mind"
          />

          <img src="/create.svg" alt="add photos" className="ml-4" />
        </div>
        <Button className="absolute right-12 bottom-2 mt-4">Post</Button>
      </div>
      <div className="relative w-[70%] h-44 mt-[2%] ml-[10%] bg-[#101117] lg:hidden">
        <p className="text-white font-semi-bold text-xl ml-4 mt-2">
          What is happening?
        </p>

        <div className="w-[70%] h-[70%]">
          <Textarea
            placeholder="write your mind"
            className="ml-12 mb-4 mt-4 text-white"
          />
          <Button className="absolute right-12 bottom-2">Post</Button>
          <img src="/create.svg" alt="" className="absolute left-4 bottom-4" />
        </div>
      </div>
    </>
  );
}
