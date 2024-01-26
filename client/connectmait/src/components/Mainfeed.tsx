import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
export default function Mainfeed() {
  return (
    <>
      <div className="relative flex flex-col items-center w-[80vw] bg-[#101117]   hover:rounded-lg hover:border hover:border-white mt-4 ml-[10vw] h-[200px] lg:w-[40vw] lg:ml-[30vw]">
        <p className="font-bold mt-2 text-lg text-white lg:hidden">
          Welcome to Mait connect!
        </p>

        <p className="font-bold mt-2 text-lg text-white lg:mb-8">
          What is happening!?
        </p>
        <div className="object-contain overflow-hidden mt-4 mr-[5%] w-[450px]">
          <Textarea
            className="ml-[10%]  text-white w-[80%]"
            placeholder="Write your mind"
          />
          <Button className="absolute right-4 bottom-2 lg:absolute lg:right-8 lg:bottom-4">
            Post
          </Button>
          <img
            src="/create.svg"
            alt="photo-image"
            className="absolute left-8 bottom-3 lg:right-8 bottom-4"
          />
        </div>
      </div>
    </>
  );
}
