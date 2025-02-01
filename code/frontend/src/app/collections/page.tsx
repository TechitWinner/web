import Link from 'next/link';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Collections | Techit's Home";
  const pageDescription = "My personal collection of various thing on this world, there are multiple categories.";
  const allowIndexing = true;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "https://techit.dailitation.xyz/collections",
      siteName: "techit.dailitation.xyz",
      type: "website",
    },
    robots: allowIndexing ? "index,follow" : "noindex,nofollow",
  };
}

export default function Collections() {
    return(
      <div className="container">
        <div className="child hero">
          <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
            <div className="aspect-square max-w-56 max-h-56 w-full h-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
              <p className="font-ico text-9xl m-0"></p>
            </div>
            <div className="flex flex-col items-start justify-center text-center md:text-start h-full w-full">
              <div className="block">
                <p className="font-mono">/collections</p>
                <h1 className="text-5xl md:text-7xl">Collections</h1>
                <p>My personal collection of various thing on this world, there are multiple categories.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="child">
          <div className="grid grid-cols-1 border divide-y divide-auto border-auto divide-dashed">
            <Link className="grid-card" href="/collections/people">
                <h2>People</h2>
                <div className="text-sm block">
                    <p>Collection of my favorite people.</p>
                </div>
            </Link>
            <Link className="grid-card" href="/collections/java">
                <h2>Java</h2>
                <div className="text-sm block">
                    <p>Collection of my Java code snippet and flags.</p>
                </div>
            </Link>
          </div>
        </div>
      </div>
    );
}