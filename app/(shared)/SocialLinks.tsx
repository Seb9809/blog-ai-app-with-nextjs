import React from "react";
import Image from "next/image";
import Twitter from "public/assets/social_twitter.png";
import Facebook from "public/assets/social_facebook.png";
import Instagram from "public/assets/social_instagram.png";
import Google from "public/assets/social_google.png";
import Discord from "public/assets/social_discord.png";

type Props = {
  isDark?: boolean; // optional boolean prop to determine whether the links should be displayed on a dark background
};

// Component that displays social media links
const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      {/* Link to Twitter */}
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`} // apply CSS classes based on whether the links are displayed on a dark background and whether the image is hovered over
          alt="twitter"
          src={Twitter} // image source
          width={20}
          height={20}
        />
      </a>
      {/* Link to Facebook */}
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="facebook"
          src={Facebook}
          width={20}
          height={20}
        />
      </a>
      {/* Link to Instagram */}
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="instagram"
          src={Instagram}
          width={20}
          height={20}
        />
      </a>
      {/* Link to Google */}
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="google"
          src={Google}
          width={20}
          height={20}
        />
      </a>
      {/* Link to Discord */}
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="discord"
          src={Discord}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
