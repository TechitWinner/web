export default function Home() {
  return(
    <div className="container">
      <div className="child hero">
        <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
          <div className="aspect-square max-w-56">
            <img alt="Techit Thawiang's profile picture" className="w-full h-full" src="/techit2025_student-cropped.jpg"/>
          </div>
          <div className="flex flex-col items-start justify-center text-center md:text-start h-full w-full">
            <div className="block">
              <p>Hello, my name is</p>
              <h1 className="text-5xl md:text-7xl">Techit Thawiang</h1>
              <p>A student from &quot;Ko Pho Tuay Ngam Wittaya School&quot; who passionated in coding and technologies stuff.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="child">
        <h2 className="text-3xl">About Me</h2>
        <div className="block">
          <p>Hi, My name is Techit Thawiang or Sumo if you would like to call me that.</p>
          <p>I&apos;m a 9th Grade student at Ko Pho Tuayngam Wittaya School located in Chon Buri, Thailand.</p>
          <p>When I was a kid, I really enjoyed using and playing around with my dad&apos;s computer, that&apos;s the beginning of why I like computer and technologies.</p>
        </div>
      </div>
      <div className="child">
        <h2 className="text-3xl">My Setup</h2>
        <p>Currently, I have one personal computer and a home server.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-dashed border border-auto divide-auto">
          <div className="grid-card">
            <h3>Beast; my strongest machine</h3>
            <p className="text-sm">
              <strong>CPU</strong>: Intel Core i3-12100F 4.3GHz<br/>
              <strong>GPU</strong>: AMD Radeon RX 570 8GB OC<br/>
              <strong>RAM</strong>: 16GB KLEV CRAS X RGB 3600MHz<br/>
              <strong>OS</strong>: Windows 11 Professional
            </p>
          </div>
          <div className="grid-card">
            <h3>Copperplate; a laptop server</h3>
            <p className="text-sm">
              <strong>Model</strong>: HP G72 Notebook Series<br/>
              <strong>CPU</strong>: Intel Pentium P6100<br/>
              <strong>RAM</strong>: 3GB<br/>
              <strong>OS</strong>: Arch Linux
            </p>
          </div>
        </div>
      </div>
      <div className="child">
        <h2 className="text-3xl">Projects</h2>
        <p>These are some projects I do alone or with friends and people.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x-[0px] md:divide-x divide-y md:divide-y-[0px] divide-dashed border border-auto divide-auto">
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
        <h2 className="text-3xl">Contact Me</h2>
        <p>These are some projects I do alone or with friends and people.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 divide-x-[0px] md:divide-x divide-dashed divide-y border border-auto divide-auto">
          <a className="grid-card col-span-full">
            <h3>E-mail</h3>
            <p className="text-sm">
              techit<span className="text-blue-500">[at]</span>dailitation<span className="text-blue-500">[dot]</span>xyz
            </p>
          </a>
          <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://facebook.com/techitwinner">
            <h3>Facebook</h3>
            <p className="text-sm">
              @techitwinner
            </p>
          </a>
          <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://instagram.com/techitwinner">
            <h3>Instagram</h3>
            <p className="text-sm">
              @techitwinner
            </p>
          </a>
          <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://tiktok.com/@techitwinner">
            <h3>TikTok</h3>
            <p className="text-sm">
              @techitwinner
            </p>
          </a>
          <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://bsky.app/profile/techit.dailitation.xyz">
            <h3>Bluesky</h3>
            <p className="text-sm">
              @techit.dailitation.xyz
            </p>
          </a>
          <a className="grid-card" rel="noreferrer nofollow noopener" target="_blank" href="https://x.com/techitwinner">
            <h3>X (Twitter)</h3>
            <p className="text-sm">
              @techitwinner
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
