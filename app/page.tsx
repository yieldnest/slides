import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <Image
        src="/yieldnest-dark.svg"
        alt="YieldNest Logo"
        width={300}
        height={300}
      />
      <Link
        className="py-8 flex justify-center items-center gap-2"
        href="/yieldnest-slides-v2.4.pdf"
        locale={false}
        aria-label="YieldNest Pitchdeck"
      >
        <button className="text-xl sm:text-3xl font-bold text-foreground hover:text-secondary">{`View YieldNest's Pitchdeck`}</button>
        <ExternalLink className="align-middle h-6 w-6 text-secondary" />
      </Link>
    </main>
  );
}
