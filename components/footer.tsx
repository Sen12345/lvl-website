"use client";
import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`w-screen overflow-hidden border-t bg-black ${
        theme === "light" ? "text-white bg-black" : "text-white bg-black"
      }  mt-10 py-5`}
    >
      <div className="grid gap-8 md:grid-cols-3   " id="contact">
        <div>
          <div className="text-center md:pl-10 md:justify-items-start">
            <p className="text-2xl">
              <strong>London Vibes Limited</strong>
            </p>
            <p>61 Bromley Road Catford</p>
            <p>London</p>
            <p>queries@londonvibes.net</p>
            <p>07473490000</p>
          </div>
        </div>
        <div className="flex justify-center md:pt-2">
          <Link href="https://www.facebook.com/profile.php?id=100087156435136">
            <MdFacebook className="h-10 w-10 mx-2" />
          </Link>
          <Link href="https://twitter.com/londonvibesltd">
            <AiFillTwitterCircle className="h-10 w-10 mr-2" />
          </Link>
          <a href="https://www.instagram.com/londonvibesnet">
            <FaSquareInstagram className="h-10 w-10" />
          </a>
        </div>
        <div className="text-center md:justify-items-end md:pr-20">
          <p className="text-sm md:pt-2">&copy; 08341870 All Rights Reserves</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
