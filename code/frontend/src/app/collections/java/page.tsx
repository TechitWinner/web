import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Java Collection | Techit's Home";
  const pageDescription = "My personal collection of Java code snippet and flags.";
  const allowIndexing = false;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "https://techit.dailitation.xyz/collections/java",
      siteName: "techit.dailitation.xyz",
      type: "website",
    },
    robots: allowIndexing ? "index,follow" : "noindex,nofollow",
  };
}

export default function CollectionsJava() {
    return(
      <div className="container">
        <div className="child hero">
          <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
            <div className="aspect-square max-w-56 max-h-56 w-full h-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
              <p className="font-ico text-9xl m-0"></p>
            </div>
            <div className="flex flex-col items-start justify-center text-center md:text-start h-full w-full">
              <div className="block">
                <p className="font-mono"><a className="opacity-50 link" href="/collections">/collections</a>/java</p>
                <h1 className="text-5xl md:text-7xl">Java</h1>
                <p>My personal collection of Java code snippet and flags.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="child">
          <div className="grid grid-cols-1 border divide-y divide-auto border-auto divide-dashed">
              <div className="grid-card">
                <h2>Minecraft Java Flags</h2>
                <div className="block text-sm">
                    <p>
                        <code>
                        -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true
                        </code>
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
}