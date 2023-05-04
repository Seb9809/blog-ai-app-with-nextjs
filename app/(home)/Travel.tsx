import React from "react";
import Card from "app/(shared)/Card";
import { Post } from "@prisma/client";

// Define the type of props that the Travel component expects
type Props = {
  travelPosts: Array<Post>;
};

// Define the Travel component
const Travel = ({ travelPosts }: Props) => {
  // Render the component's UI
  return (
    <section className="mt-10">
      {/* Add a horizontal rule */}
      <hr className="border-1" />

      {/* Header */}
      <div className="flex items-center gap-3 my-8">
        {/* Display the 'Travel' text in a green background */}
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          Travel
        </h4>
        {/* Display the 'Latest news in Tech' text */}
        <p className="font-bold text-2xl">Latest news in Tech</p>
      </div>

      {/* Display a row of 3 Card components with travel posts */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[0]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[1]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[2]}
        />
      </div>

      {/* Display a single Card component with a travel post */}
      <Card
        className="sm:flex justify-between items-center gap-3 mt-7 mb-5 "
        imageHeight="h-80"
        post={travelPosts[3]}
      />
    </section>
  );
};

export default Travel;
