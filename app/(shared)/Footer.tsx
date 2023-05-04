import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* First column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga
            architecto qui vero optio aspernatur natus quos magni iste a
            praesentium earum, nesciunt, ratione officiis consectetur
            consequuntur modi possimus expedita!
          </p>
          <p>All Rights Reserved.</p>
        </div>
        {/* Second column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">LINKS</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Third column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <p>1234567Lorem this.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
