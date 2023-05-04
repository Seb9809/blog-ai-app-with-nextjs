import Link from "next/link";
import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
import Ad1 from "public/assets/ad-1.jpg";

type Props = {};

// Navbar component
const Navbar = (props: Props) => {
  // return a header element with a navigation bar and additional content
  return (
    <header className="mb-5">
      {/* Navigation bar */}
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        {/* Social links */}
        <div className="hidden sm:block">
          <SocialLinks />
        </div>

        {/* Navigation links */}
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>

        {/* Additional content */}
        <div>
          <p>AI is cool!</p>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        {/* Left side of main content */}
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BlOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad est ab
            nam quibusdam temporibus doloribus ducimus quos illo pariatur. Nobis
            totam alias hic quos voluptatibus aliquam similique facere! Quam,
            fuga?
          </p>
        </div>

        {/* Right side of main content */}
        <div className="basis-full relative w-auto h-32">
          <Image
            fill
            alt="Advert 1"
            src={Ad1}
            placeholder="blur"
            sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Horizontal rule */}
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
