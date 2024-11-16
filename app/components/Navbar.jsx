import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/images/logo.webp"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-start">
    <Image
    src={Logo}
    alt="clas-verse"
    width={70}
    height={70}
    placeholder="blur"
    className="rounded-md"
    />
      <Link href={"/"}>Home</Link>
      <Link href={"/players"}>Players</Link>
    </nav>
  );
};

export default Navbar;
