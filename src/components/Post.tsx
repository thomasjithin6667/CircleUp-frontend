
interface PostProps {
    post: {
      _id: string;
      userId: {
        _id: string;
        username: string;
        profileImg: string;
      };
      title:String;
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
  return (

    <div className="home-post-section bg-white">
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
    <img
      style={{ height: "500px", width: "600px" }}
      src={post.imageUrl}
      alt="Post"
    />

    <div className="flex items-center justify-between mx-4 mt-3 mb-2">
      <div className="flex gap-5">

    
      </div>
      <div className="flex">
   
      </div>
    </div>
    <div className="font-semibold text-sm mx-4 mt-2 mb-4">
      92,372 likes
    </div>

    <div className="flex items-center ">
    <p className=" ms-3 text-sm font-semibold">{post.userId.username}</p>
    <p className="  text-gray-700  ms-2 text-xs font-semibold">{post.title}</p>

    </div>
    
    <p className="ms-3 text-xs text-gray-700 pb-5">{post.description}</p>
  </div>
  )
}

export default Post