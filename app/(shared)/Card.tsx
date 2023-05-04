import React from "react";
import Link from "next/link";
import { Post } from "@prisma/client";
import Image from "next/image";

type Props = {
  className?: string; // optional CSS class for the card element
  imageHeight: string; // the height of the card image
  isSmallCard?: boolean; // whether the card should be displayed as a small card
  isLongForm?: boolean; // whether the card should be displayed as a long form card
  post: Post; // the Post object to be displayed on the card
};

function Card({
  className,
  imageHeight,
  post,
  isSmallCard = false,
  isLongForm = false,
}: Props) {
  const { id, title, author, createdAt, image, snippet } = post || {};

  // Parses the 'createdAt' string into a Date object, then formats the date using the 'toLocaleDateString' method.
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  // the function that renders the card element
  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70"
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          <Image
            fill
            alt="tech"
            src={image}
            placeholder="blur"
            sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="basis-full">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
          <h4
            className={`font-bold hover:text-accent-green ${
              isSmallCard ? "text-base" : "text-lg"
            }
          ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            {title}
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">{author}</h5>
          <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {snippet}
        </p>
      </div>
    </div>
  );
}

export default Card;
