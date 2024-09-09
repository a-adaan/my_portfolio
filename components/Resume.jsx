import Link from "next/link";

export default function Resume() {
  return (
    <Link
      href="/cv/Ahmed Adaan(resume).pdf"
      target="_blank"
      alt="Nafis_Abrar_CV"
    >
      <p className="mt-4 text-base hover:underline ">Download Resume</p>
    </Link>
  );
}
