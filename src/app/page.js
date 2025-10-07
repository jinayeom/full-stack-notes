import Link from "next/link"; 
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 text-center mt-20 fade-in-up">Full Stack Web Development Notes</h1>
      <br/>
      {/* Author Note*/}
       <p className="author fade-in-up">By: Jina Yeom</p>
      
      {/* Greeting*/}
      <div className="fade-in-up">
        <h2 className="subheading fade-in-up">
          Hey there👋 I'm glad you're here 😁
        </h2>
      </div>

      {/* Flex row for image + list */}
      <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <h2 className="subheading fade-in-up">Full Stack Summary</h2>
          <Image 
            src="/images/summary.png"
            alt="Summary Image of Full Stack Web Development"
            width={600}
            height={600}
            className="fade-in-up w-150 h-auto"  
            />
        </div>
        
        <div>
          <ul className="mt-12 flex flex-col items-left space-y-4 text-xl text-gray-700">
            <li>
              <Link href="/django" className="button-link fade-in-up">
              Django
              </Link>
            </li>
            <li>
              <Link href="/git" className="button-link fade-in-up">
              Git Version Control
              </Link>
            </li>
            <li>
              <Link href="/basics" className="button-link fade-in-up">
              How Servers and Browsers Interact
              </Link>
            </li>
            <li>
              <Link href="/javascript" className="button-link fade-in-up">
              JavaScript
              </Link>
            </li>
            <li>
              <Link href="/jsx" className="button-link fade-in-up">
              JSX
              </Link>
            </li>
            <li>
              <Link href="/react" className="button-link fade-in-up">
              React
              </Link>
            </li>
            <li>
              <Link href="/nextjs" className="button-link fade-in-up">
              Next.js
              </Link>
            </li>
            <li>
              <Link href="/website" className="button-link fade-in-up">
              Creating a Website
              </Link>
            </li>
            <li>
              <Link href="/fetch" className="button-link fade-in-up">
              Fetching Data
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br/>

      {/*Welcome Message*/}

      <div>
        <div className="white-box fade-in-up">
          <h2 className="subheading fade-in-up">
            Read below...
          </h2>
          <p>
            If you found yourself on my website, I'm guessing it's safe to say that you're interesting in learning web development, 
            but you may be a bit confused with all the terminology and information that's available out there. And if you're 
            anything like me, this may make you feel a bit of imposter syndrome. 
          </p>
          <p>
            Allow me to be a friendly reminder that this is hard stuff! It's not supposed to be easy. I'm not going to sugar coat it; 
            there is a LOT to learn. However, as long as you dedicate persistent hours and stay disciplined in your self-learning journey, 
            you will succeed. 
          </p>
          <p>
            To give you a little help, I've created this tutorial to help guide your learning journey. It just explains some of the basics
            and breaks down common terminology to help you get started. I've also included some links to official documents for you to 
            further your understanding and learning.
          </p>
          <p>
            With that being said, good luck! And be proud of yourself for starting 🫡
          </p>
          <p>
            - Jina 
          </p>
        </div>
        <br/>
        {/*How to use Guide*/}
        <div className="white-box fade-in-up">
          <h2>
            How to Use this Guide 
          </h2>

          {/*New User*/}
          <div>
            <h3 className="subsubheading fade-in-up">
              If you're SUPER new...
            </h3>
            <ol className="ordered-list">
              <li className="ordered-item">
                Start with "How Servers and Browsers Interact" to learn what servers 
                and browsers even mean.
              </li>
              <li className="ordered-item">
                Then proceed to learn "JavaScript" as this is the language you will use
                extensively for web development (eg React, Node, Next.js), plus multiple frameworks and other
                programming languages (eg TypeScript) are based off of JavaScript.
              </li>
              <li className="ordered-item">
                Once you have a good understanding of programming in JavaScript, you can now move onto
                learning "JSX", "React", and "Next.js".
              </li>
              <li className="ordered-item">
                Now you have the tools you need for web development, you can start learning how all of it 
                comes together to make a website by studying the "Creating a Website" module. 
              </li>
              <li className="ordered-item">
                Once you have an understanding of how to create a website, perhaps you want to create a Website
                that fetches data from an external source, like from an API. If that is the case, you'll need 
                to learn how to fetch that data. Learn how by studying the "Fetching Data" module. 
              </li>
            </ol>
          </div>
          
          {/*Moderately New*/}
          <div>
            <h3 className="subsubheading fade-in-up">
              If you're kinda new..
            </h3>
            <ol className="ordered-list">
              <li className="ordered-item">
                You can skip Step 1 from the list above and use your own discretion. 
              </li>
              <li className="ordered-item">
                Review the modules you aren't confident in. 
              </li>
            </ol>
          </div>


          {/*Advanced*/}
          <div>
              <h3 className="subsubheading fade-in-up">
                If you're advanced...
              </h3>
              <p>
                Maybe you can review my notes and suggest any edits? 
              </p>
          </div>
        </div>
        
        
      </div>
      <br/>

      <div className="white-box fade-in-up">
        <h2 className="subheading fade-in-up">
          Suggestions Form
        </h2>
        <p className="body">If you'd like to submit suggestions to help improve this page, please
          submit it below:
        </p>
        <Link href="/suggestions" className="button-link fade-in-up">
        Submit a Suggestion
        </Link>
      </div>

    </main>

  );
}
