import Image from "next/image";
import Link from "next/link";
import logo from "../utils/utils/tiktik-logo.png";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center border-b-2 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px] ">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
}
