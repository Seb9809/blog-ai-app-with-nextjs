import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "public/assets/ad-2.png";
import aboutProfile from "public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      {/* Header */}
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and follow
      </h4>

      {/* Social media links */}
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>

      {/* Subscription form */}
      <Subscribe />

      {/* Advertisement */}
      <div className="bg-wh-900 my-8">
        <Image
          className="hidden md:block my-8 w-full"
          alt="advert-2"
          src={Ad2}
          placeholder="blur"
          width={500}
          height={1000}
        />
      </div>

      {/* About section */}
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs fontb4 text-center">
        About the blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          alt="about-profile"
          src={aboutProfile}
          placeholder="blur"
          style={{ width: "500px", height: "500px", objectFit: "cover" }}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Natanash Roberta
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At itaque
        magnam sed soluta quo perspiciatis.
      </p>
    </section>
  );
};

export default Sidebar;
