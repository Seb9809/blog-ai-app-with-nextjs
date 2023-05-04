import React from "react";
import Card from "app/(shared)/Card"; // import the Card component
import { Post } from "@prisma/client"; // import the Post type

type Props = {
  techPosts: Array<Post>; // Define the type of props that the Tech component expects
};

const Tech = ({ techPosts }: Props) => {
  // destructure the techPosts array from props
  return (
    <section>
      <hr className="border-1" />

      {/* Header */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest news in Tech</p>
      </div>

      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
        {/* Large cards */}
        <Card
          className=" col-span-1 row-span-3"
          imageHeight="h-96"
          post={techPosts[0]}
          isLongForm // a boolean prop indicating the type of card
        />
        {/* Small cards */}
        <Card
          className=" col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[1]}
          isSmallCard
        />
        {/* Small cards */}
        <Card
          className=" col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[2]}
          isSmallCard
        />
        {/* Small cards */}
        <Card
          className=" col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[3]}
          isSmallCard
        />
      </div>
    </section>
  );
};

export default Tech;
