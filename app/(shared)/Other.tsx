import React from "react";
import Card from "./Card";
import { Post } from "@prisma/client";

// Define the type for the component props
type Props = {
  otherPosts: Array<Post>;
};

// Define the Other component as a functional component that takes in the props
const Other = ({ otherPosts }: Props) => {
  // Render the component's content
  return (
    <section className="pt-4 mb-16">
      {/* Render a horizontal line */}
      <hr className="border-1" />

      {/* Render a heading */}
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>

      {/* Render a grid container with two columns on small screens */}
      <div className="sm:grid grid-cols-2 gap-16">
        {/* Render a Card component for each of the four posts in the otherPosts array */}
        <Card
          className=" mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[0]}
        />
        <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[1]}
        />
        <Card
          className=" mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[2]}
        />
        <Card
          className=" mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[3]}
        />
      </div>
    </section>
  );
};

export default Other;
