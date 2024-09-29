import Link from "next/link";

export default function Resume() {
  return (
    <Link
      href="https://drive.google.com/file/d/1fgVb76WLmIom9nSXuOwNDOcl1uyplv2p/view?usp=sharing"
      target="_blank"
      alt="Nafis_Abrar_CV"
      className="relative m-5"
    >
      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
      <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-gray-200">
        Resume
      </span>
    </Link>
  );
}
