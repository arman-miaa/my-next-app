import PostCard from "@/components/Posts/PostCard";
import { IPost } from "@/types";


const PostsPage = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=9", {
            //   cache: "force-cache"
            // next: {
            //     revalidate: 30,
            // }
            cache: "no-store"
      }
    );
    const posts = await res.json()
  
    return (
        <div>
            <h1 className="text-4xl text-center">All Posts</h1>
            <div className="grid md:grid-cols-3 gap-4 px-8 mt-8 ">
                {posts?.map((post: IPost) => <PostCard key={post?.id} post={post} />)}
            </div>
        </div>
    );
};

export default PostsPage;