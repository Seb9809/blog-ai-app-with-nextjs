import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(shared)/Other";
import Subscribe from "app/(shared)/Subscribe";
import Sidebar from "app/(shared)/Sidebar";
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";

// Revalidation time in seconds
export const revalidate = 60;

// Function to retrieve and format blog posts from database
const getPosts = async () => {
  const posts = await prisma.post.findMany();

  // Use Promise.all to map through each post and asynchronously load its image
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      // Require image module and format post object to include default export
      const imageModule = require(`../public${post.image}`);

      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

// Define main component
export default async function Home() {
  // Call getPosts function to retrieve and format blog posts
  const posts = await getPosts();

  // Function to format blog posts into arrays for each category
  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    // Loop through each post and sort them into their respective categories
    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    // Return arrays of formatted posts for each category
    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  // Call formatPosts function to retrieve arrays of formatted posts for each category
  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  // Render component with formatted blog post data
  return (
    <main className="px-10 leading-7 ">
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
