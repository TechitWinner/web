import people from '@/assets/people.json';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "People Collection | Techit's Home";
  const pageDescription = "My personal collection of my favorite people on this world and why.";
  const allowIndexing = false;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "https://techit.dailitation.xyz/collections/people",
      siteName: "techit.dailitation.xyz",
      type: "website",
    },
    robots: allowIndexing ? "index,follow" : "noindex,nofollow",
  };
}

export default function CollectionsPeople() {
    return(
      <div className="container">
        <div className="child hero">
          <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
            <div className="aspect-square max-w-56 max-h-56 w-full h-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
              <p className="font-ico text-9xl m-0"></p>
            </div>
            <div className="flex flex-col items-start justify-center text-center md:text-start h-full w-full">
              <div className="block">
                <p className="font-mono"><a className="opacity-50 link" href="/collections">/collections</a>/people</p>
                <h1 className="text-5xl md:text-7xl">People</h1>
                <p>My personal collection of my favorite people on this world and why.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="child">
          <div className="grid grid-cols-1 border divide-y divide-auto border-auto divide-dashed">
            {people.map((person, index) => (
              <a className="grid-card" key={`old-${index}`} target="_blank" rel="nofollow noreferrer noopener" href={`https://wikipedia.org/wiki/${person.wiki}`}>
                <h2>{person.name}</h2>
                <div className="block text-sm">
                    <p className="font-tnum mt-0">{person.birthday}{person.dead && ` - ${person.dead}`}</p>
                    <p>
                        {person.why}
                    </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
}