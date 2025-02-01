import photography from "../../assets/photography.json";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "About Me | Techit's Home";
  const pageDescription = "Learn more about me—my name, my age, interests, history, and everything that defines who I am.";
  const allowIndexing = true;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "https://techit.dailitation.xyz/about",
      siteName: "techit.dailitation.xyz",
      type: "website",
    },
    robots: allowIndexing ? "index,follow" : "noindex,nofollow",
  };
}

export default function About() {
    const baseURL = photography.scheme.url;
    return(
      <div className="container">
        <div className="child hero">
          <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
            <div className="aspect-square max-w-56 max-h-56 w-full h-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
              <p className="font-ico text-9xl m-0"></p>
            </div>
            <div className="flex flex-col items-start justify-center text-center md:text-start h-full w-full">
              <div className="block">
                <p className="font-mono">/about</p>
                <h1 className="text-5xl md:text-7xl">About Me</h1>
                <p>Learn more about me—my name, age, interests, history, and everything that defines who I am.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="child">
          <h2 className="text-3xl">Who am I?</h2>
          <div className="block">
            <p>Hi, My name is Techit Thawiang.</p>
            <p>I&apos;m an ordinary Thai citizen living in Chon Buri, Thailand, faithless in current Thailand government.</p>
            <p>I&apos;m a 9th Grade student at Ko Pho Tuay Ngam Wittaya School located in Chon Buri, Thailand.</p>
          </div>
        </div>
        <div className="child">
          <h2 className="text-3xl">Interests</h2>
          <div className="block">
            <p>When I&apos;m not working on my coding projects, I&apos;m busy exploring other interests like gaming, reading about tech innovations, and learning new ways to push myself beyond my limits. I believe every mistake is a lesson, and I love improving from each one.</p>
            <p>One day, I hope to use my coding skills to build something big—maybe create tools or apps that others find helpful and enjoyable.</p>
            <p>For now, I&apos;m just a teen who loves to learn and explore new possibilities in tech.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {photography.electronics.items.map((item, index) => (
              <a href={`${baseURL}${photography.electronics.prefix}${item.filename}`} className="grid-card photo" key={`electronics-${index}`}>
                <img
                  className="w-full h-full"
                  src={`${baseURL}${photography.electronics.prefix}${item.filename}?w=512&q=75`}
                  alt={item.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
}