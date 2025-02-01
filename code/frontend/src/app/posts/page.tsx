import Link from 'next/link';
import { Metadata } from "next";
import { fetchAllPosts } from '@/library/usePosts';

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Posts | Techit's Home";
  const pageDescription = "My personal blog post, technologies, IT, games, reviews, etc.";
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

const formatDate = (date: string) => new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
});

export default async function Posts() {
    const posts = await fetchAllPosts();
    return (
      <div className="container">
        <div className="child hero">
          <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
            <div className="aspect-square max-w-56 max-h-56 w-full h-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
              <p className="font-ico text-9xl m-0"></p>
            </div>
            <div className="flex flex-col items-start justify-center text-center md:text-start h-full w-full">
              <div className="block">
                <p className="font-mono">/posts</p>
                <h1 className="text-5xl md:text-7xl">Posts</h1>
                <p>My personal blog post, technologies, IT, games, reviews, etc.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="child">
          <div className="grid grid-cols-1 border divide-y divide-auto border-auto divide-dashed">
            {posts.map((post) => (
                <Link key={post.id} className="grid-card" href={`/posts/${post.slug}`}>
                    <h2>{post.title}</h2>
                    <div className="text-sm block opacity-75">
                        <p>{post.description}</p>
                        <section className="flex flex-roow flex-wrap gap-2">
                            <div className="flex flex-row gap-1 items-center">
                                <span className="font-ico text-xl m-0"></span>
                                <p className="m-0">{formatDate(post.created)}</p>
                            </div>
                        </section>
                    </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
    )
}