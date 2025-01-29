import photography from "../assets/photography.json";

export default function Photography() {

    const baseURL = photography.scheme.url;

    return(
      <div className="container">
        <div className="child hero">
          <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
            <div className="aspect-square max-w-56 max-h-56 w-full h-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
              <p className="font-ico text-9xl m-0"></p>
            </div>
            <div className="flex flex-col items-center justify-center text-center md:text-start h-full">
              <div className="block">
                <p className="font-mono">/photography</p>
                <h1 className="text-5xl md:text-7xl">Photography</h1>
                <p>I love photography—it&apos;s my way of capturing beauty and preserving meaningful moments.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="child">
          <p className="font-ico text-3xl m-0"></p>
          <h3>Lag Warning&excl;</h3>
          <p>
            This page contains numerous high-quality images, which may cause a delay in loading times.<br/>
            Since <code>next/images</code> is a pain to work with, there is no image optimization.
          </p>
        </div>
        <div className="child">
          <h2 className="text-3xl">Prelude</h2>
          <div className="block">
            <p>When I was 8-9 years old, I had a phone. Even though it was not that decent in spec, it has a place in my heart even my mom bought it for me.</p>
            <p>I started shooting random stuff like crazy, at the time, I didn&apos;t even care if these photos will be deleted or forever gone, luckily there is something called &quot;Google Photos&quot; that automatically backed up all of my ancient aged photos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {photography.old.items.map((item, index) => (
              <a href={`${baseURL}${photography.old.prefix}${item.filename}`} className="grid-card photo" key={`old-${index}`}>
                <img
                  className="w-full h-full"
                  src={`${baseURL}${photography.old.prefix}${item.filename}`}
                  alt={item.alt}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="child">
          <h2 className="text-3xl">Later on</h2>
          <div className="block">
            <p>Time flew by, in 2023 I visited my my friend at his house and he introduced me to his DSLR camera given by his father and he asked if I might want to try it, that&quot;s the first DSLR camera I&apos;ve ever used.</p>
            <p>It&apos;s a Canon EOS 600D, here&apos;s some images I shoot with it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {photography.firstdslr.items.map((item, index) => (
              <a href={`${baseURL}${item.filename}`} className="grid-card photo" key={`firstdslr-${index}`}>
                <img
                  className="w-full h-full"
                  src={`${baseURL}${photography.firstdslr.prefix}${item.filename}`}
                  alt={item.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
}