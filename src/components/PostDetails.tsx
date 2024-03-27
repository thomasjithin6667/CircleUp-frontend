import { useState } from "react";
import { EllipsisVertical, Edit, Delete, Heart,MessageCircle,X} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { deletePost, editPost, likePost } from "../services/api/user/apiMethods";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setUsePosts } from "../utils/context/reducers/authSlice";

interface PostProps {
  post: {
    _id: string;
    userId: {
      _id: string;
      username: string;
      profileImageUrl: string;
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
  }
}




const PostDetails: React.FC<PostProps> = ({ post }) => {
  const dispatch = useDispatch();
  const [hideLikes, setHideLikes] = useState(post.hideLikes);
  const [hideComment, setHideComment] = useState(post.hideComment);

  const handleHideLikesToggle = () => {
    setHideLikes(!hideLikes);
  };

  const handleHideCommentToggle = () => {
    setHideComment(!hideComment);
  };


  const selectUser = (state: any) => state.auth.user || "";
  const user = useSelector(selectUser) || "";
  const userId = user._id || "";

  const formik = useFormik({
    initialValues: {
      title: post.title,
      description: post.description,
    },
    validationSchema: Yup.object({
      title: Yup.string().trim().required("Title is required"),
      description: Yup.string().trim().required("Description is required"),
    }),
    onSubmit: async (values) => {
      const postId = post._id;
      const { title, description } = values;
      try {
        await editPost({
          userId,
          postId,
          title,
          description,
          hideComment,
          hideLikes,
        })
          .then((response: any) => {
            const postsData = response.data;
            dispatch(setUsePosts({ userPost: response.data }));

            toast.success("Post updated successfully");

            console.log(postsData);
            handleCancelClick();
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error updating post:", error);
        toast.error("Failed to update post");
      }
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isComment, setisComment] = useState(false);

  const [isEdit, setisEdit] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    setIsOpen(false);
    setisEdit(true);
  };

  const handleIsComment=()=>{
    setisComment(true)
    
  }

  const handleCancelClick = () => {
    setisEdit(false);
  };

  const handleDelete = (postId: string, userId: string) => {
    try {
      deletePost({ postId, userId })
        .then((response: any) => {
          const postData = response.data;
          console.log(postData.posts);
          dispatch(setUsePosts({ userPost: response.data }));
          toast.info("Post Deleted");
          setIsOpen(!isOpen);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const [isLikedByUser, setIsLikedByUser] = useState(
    post.likes.includes(userId)
  );

  const handleLike = (postId: string, userId: string) => {
    try {
      likePost({ postId, userId })
        .then((response: any) => {
          const postData = response.data;
          console.log(postData.posts);
          dispatch(setUsePosts({ userPost: response.data.posts  }));
          setIsLikedByUser(!isLikedByUser);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error: any) {
      console.log(error.message);
    }
  };
console.log(isComment);
console.log(post.userId.username);
console.log(user.name);


  return (
    <div className=" bg-white overflow-hidden shadow-none mt-7 rounded-md">
      <div className="grid grid-cols-3 min-w-full">
        <div className="col-span-2 w-full">
          <img style={{width:'768px'}}
            className=" w-full max-w-full min-w-full"
            src={post.imageUrl}
            alt="Description"
          />
        </div>

        <div className="col-span-1 relative pl-4 ">
          <header className="border-b border-grey-400 flex justify-between">
            <div>
              <a
                href="#"
                className="flex cursor-pointer py-4  items-center text-sm outline-none focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
              >
                <img
                  src={post.userId.profileImageUrl}
                  className="h-9 w-9 rounded-full object-cover"
                  alt="user"
                />
                <p className="block ml-2 font-bold"> {post.userId.username}</p>
              </a>
            </div>
         
             {post.userId.username==user.name &&(
                <button onClick={toggleDropdown} className="me-2">
                <EllipsisVertical size={18} />
              </button>
            )}

           
          </header>
          {isOpen && post.userId.username==user.name && (
            <div className="absolute right-7 top-5 mt-2 w-40 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
              <ul className="py-2">
                <li>
                  <a
                    onClick={handleEdit}
                    className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex gap-1">
                      {" "}
                      Edit <Edit size={15} />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleDelete(post._id, post.userId._id)}
                    className="block px-4 py-2 font-semibold text-xs text-red-500 hover:bg-gray-100"
                  >
                    <div className="flex gap-1">
                      {" "}
                      Delete <Delete size={15} />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}

          {!isEdit && !isComment&& (
            <div>
              <p className="  text-gray-700  ms-2 text-xs font-semibold">
                {post.title}
              </p>

              <p className="ms-3 text-xs text-gray-700 pb-5">
                {post.description}
              </p>
            </div>
          )}

          {isEdit && (
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="user-post-inputs">
                  <input
                    type="text"
                    placeholder="Title"
                    className="rounded-lg border mt-3 border-gray-300 p-2  outline-none text-xs font-normal"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="title"
                  />
                    <div style={{height:'10px'}}>
                    {formik.touched.title && formik.errors.title && (
                    <p className="text-red-600 text-xs">
                      {formik.errors.title}
                    </p>
                  )}

                    </div>
              
                  <textarea
                    className=" rounded-lg description sec p-3 mt-4 h-20 border border-gray-300 outline-none text-xs font-normal"
                    spellCheck="false"
                    placeholder="Describe everything about this post here"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="description"
                  ></textarea>
                  <div style={{height:'10px'}}>
                  {formik.touched.description && formik.errors.description && (
                    <p className="text-red-600 text-xs">
                      {formik.errors.description}
                    </p>
                  )}

                  </div>
             
                </div>

                <div className="flex justify-between gap-10 p-3">
                  <div>
                    <p className="text-xs font-semibold text-grey-600">
                      Hide Likes
                    </p>
                    <p className=" hide  text-xs">
                      Enabling hide likes will hide the likes count from others
                    </p>
                  </div>

                  <label className="inline-flex items-center   cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={hideLikes}
                      onChange={handleHideLikesToggle}
                    />
                    <div className="relative w-9 h-5 bg-gray-200  rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                </div>
                <div className="flex gap-10 p-3 justify-between ">
                  <div>
                    <p className="text-xs font-semibold text-grey-600">
                      Hide Comments
                    </p>
                    <p className="hide text-xs">
                      Enabling hide comments will remove the commenting option
                      from the post
                    </p>
                  </div>

                  <label className="inline-flex items-center  cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={hideComment}
                      onChange={handleHideCommentToggle}
                    />
                    <div className="relative w-9 h-5 bg-gray-200  rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                </div>
                <div className="buttons flex me-4 mt-3">
                  <div
                    onClick={handleCancelClick}
                    className="text-xs rounded btn border border-gray-300 px-4 py-2  cursor-pointer text-gray-500 ml-auto  hover:bg-red-600  hover:text-white "
                  >
                    Cancel
                  </div>
                  <button
                    type="submit"
                    className="text-xs rounded btn border px-4 py-2 cursor-pointer text-white ml-2 bg-gray-900  hover:bg-green-600 "
                  >
                    Edit Post
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* <div >
                        <div className="pt-1">
                            <div className="text-sm mb-2 flex flex-start items-center">
                                <div>
                                    <a href="#" className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                        <img className="h-8 w-8 rounded-full object-cover"
                                            src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                            alt="user" />
                                    </a>
                                </div>
                                <p className="font-bold ml-2">
                                    <a className="cursor-pointer">Joshua:</a>
                                    <span className="text-gray-700 font-medium ml-1">
                                        Good post
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="text-sm mb-2 flex flex-start items-center">
                            <div>
                                <a href="#" className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                    <img className="h-8 w-8 rounded-full object-cover"
                                        src="https://images.pexels.com/photos/3861456/pexels-photo-3861456.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                        alt="user" />
                                </a>
                            </div>
                            <p className="font-bold ml-2">
                                <a className="cursor-pointer">Kesha:</a>
                                <span className="text-gray-700 font-medium ml-1">
                                    This is amazing
                                </span>
                            </p>
                        </div>
                    </div> */}
          {!isEdit &&!isComment&& (
            <div className="absolute bottom-0 left-0 right-0 pl-4 mb-4">
              <div className="pt-4">
                <div className="mb-2">
                  <div className="flex items-center">
                    <button
                      className="mr-4"
                      onClick={() => handleLike(post._id, post.userId._id)}
                      type="button"
                    >
                      {isLikedByUser ? (
                        <Heart
                          color="green"
                          fill="green"
                          strokeWidth={1.5}
                          size={22}
                        />
                      ) : (
                        <Heart color="gray" strokeWidth={1.5} size={22} />
                      )}
                    </button>
                    <button type="button" onClick={handleIsComment}>
                      <MessageCircle color="gray" strokeWidth={1.5} size={22} />
                    </button>
                  </div>
                  <span className="text-gray-600 text-sm font-bold">
                    {post.likes.length} Likes
                  </span>
                </div>
                <span className="block ml-2 text-xs text-gray-600">
                  5 minutes
                </span>
              </div>
          


             
            </div>

          )}
              {isComment && !isEdit&&(

<div className=" pt-4 pb-1 pr-3 flex flex-col justify-between align-bottom">
  <div className="comments h-full">
  <div className="flex items-center">
          <img
        className="h-9 w-9 rounded-full border-2 p-.5 mb-3 border-green-600"
        src="data:image/jpeg;base64,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"
        alt="Profile"
      />
          <div className="w-full flex justify-between">
          <p className="text-xs ms-3 text-black">Nice Post very surreal photo</p>
          <p className="text-xs text-gray-400">5m ago</p>

          </div>
         
          

          </div>
       
    

  </div>
<div className="w-full flex items-center absolute bottom-4 pe-6">
    <textarea className="w-full border-gray-200  focus:border-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-green-600   rounded-md text-xs resize-none outline-none appearance-none" aria-label="post your comments..." placeholder="post your comments..."  autoComplete="off" autoCorrect="off" style={{ height: '36px' }}></textarea>
    <button className="mx-2 text-xs  focus:outline-none border-none bg-transparent text-green-600">Comment</button>
</div>
</div>

)}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
