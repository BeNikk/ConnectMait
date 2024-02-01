import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import PostFeed from "./PostFeed";

interface LightboxProps {
  image: string;
  onClose: () => void;
}
const Lightbox = ({ image, onClose }: LightboxProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <img src={image} alt="Selected Image" className="max-w-full max-h-full" />
      <button
        className="absolute top-4 right-4 p-2 text-white bg-[#1A8CD8] rounded-lg"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default function Mainfeed() {
  const [postContent, setPosts] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  function closeLightbox() {
    setLightboxImage(null);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative flex flex-col items-center w-[80vw] bg-[#101117]   hover:rounded-lg hover:border hover:border-white mt-4 ml-[10vw] min-h-[200px] lg:w-[40vw] lg:ml-[30vw]">
          <p className="font-bold mt-2 text-lg text-white lg:hidden">
            Welcome to Mait connect!
          </p>

          <p className="font-bold mt-2 text-lg text-white lg:mb-8">
            Write Your Mind
          </p>
          <div
            className="object-contain overflow-hidden mt-4 mr-[5%] w-[450px]"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPosts(e.target.value);
            }}
          >
            <Textarea
              className="bg-[#101117] ml-[10%] text-white max-h-[40%] w-[80%]"
              placeholder="Write"
            />
            <div className="mt-4">
              {selectedImage && (
                <div className="relative ml-[10%] inline-block mr-2 mb-2">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Image"
                    className="w-72 h-72 object-contain cursor-pointer"
                    onClick={() => {
                      if (selectedImage) {
                        setLightboxImage(URL.createObjectURL(selectedImage));
                      }
                    }}
                  />
                  <button
                    className="absolute top-0 right-2 p-1 bg-[#1A8CD8] rounded-lg text-white cursor-pointer"
                    onClick={() => {
                      setSelectedImage(null);
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {lightboxImage && (
              <Lightbox image={lightboxImage} onClose={closeLightbox} />
            )}
          </div>
          <Button
            className="absolute bg-[#1A8CD8] right-4 bottom-2 lg:absolute lg:right-8 lg:bottom-4"
            onClick={() => {
              try {
                const formData = new FormData();
                formData.append("postContent", postContent);
                if (selectedImage) {
                  formData.append("image", selectedImage);
                }
                if (postContent == "" && selectedImage == null) {
                  alert("add content");
                } else {
                  axios
                    .post("http://localhost:3000/addPost", formData, {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                        "Content-Type": "multipart/form-data",
                      },
                    })
                    .then(() => {
                      alert("post added");
                      setPosts("");
                      setSelectedImage(null);
                    })
                    .catch((e) => {
                      console.log("some error occured", e);
                    });
                }
              } catch (error) {
                console.log("error", error);
              }
            }}
          >
            Post
          </Button>
          <label className="cursor-pointer">
            <input
              type="file"
              className="sr-only absolute left-4 bottom-2 lg:absolute lg:left-8 lg:bottom-4"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files.length > 0) {
                  setSelectedImage(e.target.files[0]);
                }
              }}
            />
            <img
              src="/create.svg"
              alt=""
              className="absolute left-4 bottom-2 lg:absolute lg:left-8 lg:bottom-4"
            />
          </label>
        </div>
        <PostFeed />
      </div>
    </>
  );
}
