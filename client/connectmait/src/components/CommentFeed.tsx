import { useState } from "react";

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
export default function CommentFeed() {
  const [feed, setFeed] = useState<Post[]>([]);

  return (
    <>
      <div className="bg-red-200 mt-12">hey everyone! how r u guys doing</div>
    </>
  );
}
