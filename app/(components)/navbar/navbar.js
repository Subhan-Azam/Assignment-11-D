import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center h-16 bg-transparent text-white">
        <image src="/img/Smartmockups_Logo_Symbol.png" width={"80px"} />

        <nav className="flex">
          <ul className="flex flex-wrap justify-center my-2 space-x-5">
            <li>
              <Link href={"/"}> Home </Link>
            </li>

            <li>
              <Link href={"/about"}>ABOUT</Link>
            </li>

            <li>
              <Link href={"/team"}>OUR TEAM</Link>
            </li>

            <li>
              <Link href={"/servicess"}>SERVICES</Link>
            </li>

            <li>
              <Link href={"/portfolio"}>PORTFOLIO</Link>
            </li>

            <li>
              <Link href={"/blog"}>BLOG</Link>
            </li>

            <li>
              <Link href={"/price"}>Prices</Link>
            </li>
          </ul>
        </nav>

        <button className="bg-white text-blue-800 border-2 rounded-2xl py-1 px-5 hover:bg-gray-300">
          Search
        </button>
      </div>
    </>
  );
}
