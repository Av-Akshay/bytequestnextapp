import Image from "next/image";
import tannTrim from "../../../public/assets/TANN TRIM.svg";
import searchBtn from "../../../public/assets/Frame 51.svg";
import userBtn from "../../../public/assets/Frame 52.svg";
import bookmarkBtn from "../../../public/assets/Bookmark.svg";
import shoppingBtn from "../../../public/assets/Frame 54.svg";

export default function Header(): React.ReactNode {
  return (
    <div className="w-11/12 m-auto">
      <div className="flex items-center justify-between h-[8vh]">
        <div>
          <Image src={tannTrim} alt="logo" width={200} />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10">
            <li>
              <Image src={searchBtn} alt="search" />{" "}
            </li>
            <li>
              <Image src={userBtn} alt="user" />{" "}
            </li>
            <li>
              <Image src={bookmarkBtn} alt="bookmark" />{" "}
            </li>
            <li>
              <Image src={shoppingBtn} alt="shopping" />{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-5">
        <ul className="flex items-center justify-center gap-20">
          <li className="font-light cursor-pointer"> Bags</li>
          <li className="font-light cursor-pointer"> Travel</li>
          <li className="font-light cursor-pointer"> Accessories</li>
          <li className="font-light cursor-pointer"> Gifting </li>
          <li className="font-light cursor-pointer"> Jewelry </li>
        </ul>
      </div>
    </div>
  );
}
