import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-container">
      <div className="content-wrapper fade-in-up">
        <h1 className="page-title fade-in-up">Git Versional Control Notes</h1>
        
        {/* Author Note*/}
        <p className="author">Author: Jina</p>

        {/* Introduction */}
        <p className="body">For those of you rushing to learn git version control, maybe because you're
            at a hackathon or you're just confused about the material online, here is a quick cheat sheet into the topic. 
        </p>

      {/* Git Version Control Overview */}
      <h2 className="subheading">Git Version Control Overview</h2>
      <p className="body">
      Here is a high-level overview of how git and git providers work. 
     </p>
        <Image 
        src="/images/git/git-overview.png"
        alt="Overview of git commands for local git and git providers"
        width={500}
        height={500}
        className="fade-in-up rounded-lg"
      />

     </div>
    </main>
  );
}