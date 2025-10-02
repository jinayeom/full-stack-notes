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
     <div className="flex justify-center">
        <Image 
        src="/images/git/git-overview.png"
        alt="Overview of git commands for local git and git providers"
        width={500}
        height={500}
        className="fade-in-up rounded-lg"
      />
      </div>
      <h3 className="subsubheading">Git</h3>
        <p className="body">
          Git is a version control system (VCS) that you can download onto your local device to help you keep track of changes
          in your code. To make this all easy, let's say you're building a project in a hackathon. To make it easy to follow, we'll 
          navigate this by setting up possible scenarios. 
        </p>
      
      <h3 className="subsubheading">Scenario 1: You are editing your code but you break something...</h3>
        <p className="body">
          Imagine you were typing away on your code, then you suddenly break something. If you didn't use Git, you wouldn't have
          a previous "version" of your code to revert to. This is a problem. But luckily, this is where Git can be really helpful. 
          Git is a software that runs locally on your device, and allows you to keep multiple versions of your code, as long as you are 
          "commiting" it to your <span className="font-bold">local repository</span>.
        </p>
        <p className="body">
          The best way you can avoid this is by following the steps below: 
        </p>

        <ol className="ordered-list">
          <li className="ordered-item"><span className="font-bold">Staging your changes in the Staging Area.</span>
            <p className="body">
              This can be achieved by either running <code className="inline-code">git add .</code> (which stages all the changes you've made)
              or by running <code className="inline-code">git add filename</code> with  <code className="inline-code">filename</code> being
              replaced with the actual name of the file. 
            </p>
          </li>
          <li className="ordered-item"><span className="font-bold">Commiting your changes to the Local Repository.</span>
            <p className="body">
              Then you must actually commit those changes currently sitting in the staging area into the local repository by 
              running <code className="inline-code">git commit -m "Include commit message here"</code>. It's here you will 
              find all the "snapshots" or "versions" of codes/files you have committed. 
            </p>
          </li>
        </ol>

        <h3 className="subsubheading">Scenario 2: You and your hackathon teammate have made your own changes without
          consulting each other, so now you have two different versions of the code...</h3>
        <p className="body">
          This is a common issue you will run into when you are working on the same code with multiple other programmers. 
          Thus, we have git providers, like GitHub, that allow us to <span className="font-bold">push</span> the versions 
          we committed to our <span className="font-bold">local repositories</span> to <span className="font-bold">remote repositories </span> 
          so other people can <span className="font-bold">pull </span> the most updated version (with all the changes you've made) 
          and thus contribute further to the code. To no surprise, the commands to push and pull versions to and from a remote repository are 
          <code className="inline-code">git push</code> and <code className="inline-code">git pull</code>, respectively.
          This way, when you've made pushes to the project, you can <code className="inline-code">git push</code> your changes from your
          local repository to the remote repository (your team's repo), and subsequently your team members can 
          <code className="inline-code">git pull</code> your latest changes so they can build off the most up-to-date verion of your project.
        </p>

     </div>
    </main>
  );
}