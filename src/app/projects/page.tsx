export default function About() {
    return(
      <div className="container">
        <div className="child hero">
          <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
            <div className="aspect-square max-w-56 max-h-56 w-full h-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
              <p className="font-ico text-9xl m-0"></p>
            </div>
            <div className="flex flex-col items-center justify-center text-center md:text-start h-full">
              <div className="block">
                <p className="font-mono">/projects</p>
                <h1 className="text-5xl md:text-7xl">Projects</h1>
                <p>Projects I&apos;ve made on my own, with friends, or helped out with. Each one shows what I&apos;ve worked on and learned.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="child">
          <h2 className="text-3xl`">2025</h2>
          <p>
            In 2025, I (or we) have made a total of 1 project(s).<br/>
            Here&apos;s the list of them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x-[0px] md:divide-x divide-y md:divide-y-[0px] divide-dashed border border-auto divide-auto">
            <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://unix.in.th">
              <h3>13th major update of my website</h3>
              <p className="text-sm">
                The 13th look for the Techit&apos;s Home website. It&apos;s a long journey since the first look that is just saying &quot;Techit&apos;s Website, nothing here.&quot;
              </p>
            </a>
        </div>
        </div>
        <div className="child">
          <h2 className="text-3xl`">2024</h2>
          <p>
            In 2024, I (or we) have made a total of 4 project(s).<br/>
            Here&apos;s the list of them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x-[0px] md:divide-x divide-y lg:divide-y-[0px] divide-dashed border border-auto divide-auto">
            <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://unix.in.th">
              <h3>Unix in Thailand</h3>
              <p className="text-sm">
                planned to be the biggest Unix and related stuff community in Thailand, currently we have Discord Server which is proprietary.
              </p>
            </a>
            <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://giskette.dailitation.xyz/techit/paintbrush">
              <h3>Paintbrush CSS</h3>
              <p className="text-sm">
                a simple and beautiful CSS theme created by me and inspired by Red Hat&apos;s Website UI.
              </p>
            </a>
            <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://discord.gg/dtDTDHWRf3">
              <h3>JzCraft</h3>
              <p className="text-sm">
                an ordinary Minecraft server aiming to build a mini games community. The server is in development, with a release targeted for 2025. Join our Discord for updates!
              </p>
            </a>
            <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://modrinth.com/resourcepack/techit-thaifixes">
              <h3>MC ThaiFixes</h3>
              <p className="text-sm">
                a Minecraft Resource Pack created for fixing ugly, hard-to-read, small Thai font in Minecraft 1.21+
              </p>
            </a>
          </div>
        </div>
        <div className="child">
          <h2 className="text-3xl`">Contributions</h2>
          <p>
            List of projects or products I&apos;ve contributed to or helping with stuff.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x-[0px] md:divide-x divide-y md:divide-y-[0px] divide-dashed border border-auto divide-auto">
            <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://unix.in.th">
              <h3>COSMIC Desktop Environment</h3>
              <p className="text-sm">
                Contributed by translating 3 sub-projects.
              </p>
            </a>
          </div>
        </div>
      </div>
    );
}