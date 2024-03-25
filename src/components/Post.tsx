import { Bookmark, Heart, MessageCircle } from "lucide-react";
import { likePost } from "../services/api/user/apiMethods";
import { useDispatch, useSelector } from "react-redux";
import { setUsePosts } from "../utils/context/reducers/authSlice";
import { toast } from "sonner";
import { useState } from "react";

interface PostProps {
  post: {
    _id: string;
    userId: {
      _id: string;
      username: string;
      profileImg: string;
    };
    title: string;
    imageUrl: string;
    description: string;
    likes: any[];
    isHidden: boolean;
    isBlocked: boolean;
    hideComment: boolean;
    hideLikes: boolean;
    date: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const dispatch = useDispatch();
  const selectUser = (state: any) => state.auth.user || "";
  const user = useSelector(selectUser) || "";
  const userId = user._id || "";

  const [isLikedByUser, setIsLikedByUser] = useState(
    post.likes.includes(userId)
  );

  const handleLike = (postId: string, userId: string) => {
    try {
      likePost({ postId, userId })
        .then((response: any) => {
          const postData = response.data;
          console.log(postData.posts);
          dispatch(setUsePosts({ userPost: postData.posts }));
          setIsLikedByUser(!isLikedByUser);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className=" home-post-section bg-white">
      <div className="flex items-center px-4 py-3">
        <img
          className="h-8 w-8 rounded-full"
          src={post.imageUrl}
          alt="Profile"
        />
        <div className="ml-3 ">
          <span className="text-sm font-semibold antialiased block leading-tight">
            {post.userId.username}
          </span>
          <span className="text-gray-600 text-xs block">
            Asheville, North Carolina
          </span>
        </div>
      </div>
      <img style={{ width: "600px" }} src={post.imageUrl} alt="Post" />

      <p className="  text-gray-700  ms-4 mt-2 text-xs font-semibold">
        {post.title}
      </p>

      <p className="ms-5 text-xs text-gray-700 ">{post.description}</p>

      <div className="flex items-center justify-between mx-4  mt-2">
        <div className="flex gap-5">
          <button
            onClick={() => handleLike(post._id, post.userId._id)}
            type="button"
          >
            {isLikedByUser ? (
              <Heart color="green" fill="green" strokeWidth={1.5} size={22} />
            ) : (
              <Heart color="gray" strokeWidth={1.5} size={22} />
            )}
          </button>
          <button type="button">
            <MessageCircle color="gray" strokeWidth={1.5} size={22} />
          </button>
          <button type="button">
            <Bookmark color="gray" strokeWidth={1.5} size={22} />
          </button>
        </div>
      </div>
      <div className="font-semibold text-sm py-4 mx-4">
        <p>92,372 likes</p>
      </div>
    </div>
  );
};

export default Post;
