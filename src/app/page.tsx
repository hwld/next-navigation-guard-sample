import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center place-content-center gap-2">
      <Link href="/page1" className="underline">
        to page1
      </Link>
      <Link href="/page2" className="underline">
        to page2
      </Link>
    </div>
  );
}
