import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface User {
  _id: string;
  username: string;
}
interface Post {
  _id: string;
  postContent: string;
  image: string;
  userId: User;
}
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

export default function PostFeed() {
  const navigate = useNavigate();
  const [feed, setFeed] = useState<Post[]>([]);
  const [like, setLike] = useState(false);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  function closeLightbox() {
    setLightboxImage(null);
  }

  useEffect(() => {
    axios.get("https://connect-mait.vercel.app/post").then((response) => {
      setFeed(response.data);
    });
  }, []);

  return (
    <>
      {feed &&
        feed.map((f) => {
          return (
            <>
              <div
                className={`relative flex flex-col  mt-14 mb-12 bg-black rounded-lg ml-[3%] w-[95%] lg:w-[40vw] lg:ml-[30vw]  ${
                  f.image
                    ? "min-h-[40rem] lg:min-h-[40rem]"
                    : "min-h-40 lg:min-h-40"
                } ${
                  f.postContent && f.postContent.length > 65
                    ? "min-h-[50rem] lg:min-h-[40rem]"
                    : "min-h-50 lg:min-h-40"
                }`}
              >
                {f.userId.username && (
                  <div>
                    <div className="absolute w-8 h-8 left-2 top-2 rounded-full bg-[#1A8CD8] text-white flex items-center justify-center">
                      {f.userId.username[0].toUpperCase()}
                    </div>
                    <p
                      className="absolute font-bold left-12 top-4 mb-4 text-[#1A8CD8] cursor-pointer"
                      onClick={() => {
                        navigate(`/otherProfile/${f.userId.username}`);
                      }}
                    >
                      {f.userId.username}
                    </p>

                    <p className="overflow-truncate absolute left-4 top-12 text-white mb-8">
                      {f.postContent}{" "}
                    </p>
                  </div>
                )}
                {f.image && (
                  <img
                    src={f.image}
                    alt=""
                    className="absolute left-8 lg:left-12 top-24 object-cover w-3/4 h-3/4"
                    onClick={() => {
                      setLightboxImage(f.image);
                    }}
                  />
                )}

                <img
                  src="/heart-gray.svg"
                  alt=""
                  className="absolute right-40 bottom-4 w-8"
                  onClick={() => {
                    setLike(!like);
                  }}
                />

                <div
                  className="cursor-pointer hover:bg-[#2096b2]"
                  onClick={() => {
                    navigate(`/comment/${f._id}`);
                  }}
                >
                  <img
                    src="/reply.svg"
                    alt=""
                    className="absolute ml-4 left-8 bottom-4 w-8"
                  />
                </div>
                {lightboxImage && (
                  <Lightbox image={lightboxImage} onClose={closeLightbox} />
                )}
              </div>
            </>
          );
        })}
    </>
  );
}
