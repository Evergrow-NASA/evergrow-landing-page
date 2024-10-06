import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary-black text-primary-white py-8 px-4 mx-auto">
      <a
        className="flex items-center justify-center md:text-4xl text-2xl italic gap-x-4 hover:no-underline"
        href="/"
      >
        <Image
          width={40}
          height={49.27}
          src="/icons/EvergrowLogo.svg"
          alt="Evergrow Logo"
        />
        Evergrow
      </a>
      <p className="mt-4">© {new Date().getFullYear()} Evergrow. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
