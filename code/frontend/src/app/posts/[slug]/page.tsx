import { fetchPostBySlug } from "@/library/usePosts";
import { Metadata } from "next";
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await fetchPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Post removed or not found | Techit's Home",
            description: "The post you are looking for does not exist.",
            robots: "noindex,nofollow",
        };
    }

    console.log(post)

    const pageTitle = `${post.title} | Techit's Home`;
    const pageDescription = post.description;
    const allowIndexing = true;
  
    return {
      title: pageTitle,
      description: pageDescription,
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: `https://techit.dailitation.xyz/posts/${post.slug}`,
        siteName: "techit.dailitation.xyz",
        type: "website",
      },
      robots: allowIndexing ? "index,follow" : "noindex,nofollow",
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await fetchPostBySlug(params.slug);

    if (!post) {
        return <p>Post not found</p>;
    }

    const formatDate = (date: string) => new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return (
        <div className="container">
            <div className="child post-hero h-[32rem] p-4 -mt-12 relative" style={{ backgroundImage: `url(${process.env.BACKEND_URL}/api/files/${post.collectionId}/${post.id}/${post.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="z-10">
                    <h1 className="text-5xl text-white relative z-10">{post.title}</h1>
                    <section className="flex flex-row gap-4 mt-4">
                        <div className="flex flex-col">
                            <p className="text-sm text-white font-mono uppercase m-0">Posted</p>
                            <p className="text-sm text-white m-0">{formatDate(post.created)}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm text-white font-mono uppercase m-0">Updated</p>
                            <p className="text-sm text-white m-0">{formatDate(post.updated)}</p>
                        </div>
                    </section>
                </div>
            </div>
            <div className="child">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </div>
    );
}
