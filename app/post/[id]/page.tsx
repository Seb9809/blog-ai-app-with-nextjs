import Sidebar from "@/app/(shared)/Sidebar";
import { prisma } from "@/app/api/client";
import React from "react";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "@/app/types";
import Content from "@/app/post/[id]/Content";

// Define Props interface for the Post component
type Props = {
  params: {
    id: string;
  };
};

// Define the revalidate time for Next.js ISR (Incremental Static Regeneration)
export const revalidate = 60;

// Define an async function to get a formatted post object given a post id
const getPost = async (id: string) => {
  // Use the Prisma client to find the post with the given id
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });

  // If no post was found, log an error and return null
  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  // If a post was found, format its createdAt and updatedAt timestamps
  const formattedPost = {
    ...post,
    createdAt: post?.createdAt.toISOString(),
    updatedAt: post?.updatedAt.toISOString(),
  };

  // Return the formatted post object
  return formattedPost;
};

// Define the Post component as an async function that takes Props as its argument
const Post = async ({ params }: Props) => {
  const { id } = params;

  // Call getPost with the id to get the formatted post object
  const post: FormattedPost | null = await getPost(id);

  // If no post was found, return a "Post Not Found" message
  if (!post) {
    return <div>Post Not Found</div>;
  }

  // If a post was found, display it and a sidebar using the Content and Sidebar components
  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
