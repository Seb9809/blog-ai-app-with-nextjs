import React from "react";
import Link from "next/link";
import { Post } from "@prisma/client";
import Image from "next/image";

type TrendingCardProps = {
  // Define the type of props that the Trending component expects
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    // The component renders a link to the post using Next.js Link component
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      {/* The post image is displayed using Next.js Image component */}
      <div className="z-0 relative w-full h-full">
        <Image
          fill
          alt="tech"
          src={post?.image}
          placeholder="blur"
          sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* A gradient overlay is placed on top of the image */}
      <div className="absolute z-1 top-0 left-0 w-full bg-gradient-gradual"></div>
      {/* The post category and title are displayed on top of the gradient overlay */}
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className=" inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Array<Post>; // Define the type of props that the Trending component expects
};

const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      {/* Trending header */}
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est,
          magni blanditiis minus eos sint vel accusamus aperiam a esse
          necessitatibus officiis aliquid ea illo! Illo animi repellat quasi
          omnis?
        </p>
      </div>

      {/* Trending grid */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[3]}
        />
      </div>
      {/* Trending footer */}
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, autem
        nisi. Vel dolores ad quis voluptas fugit veniam eveniet odio quod sit
        animi, qui, quos eius. Esse culpa cumque suscipit.
      </p>
    </section>
  );
};

export default Trending;
