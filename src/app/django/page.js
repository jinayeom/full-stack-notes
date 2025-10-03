import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-container">
      <div className="content-wrapper fade-in-up">
        <h1 className="page-title fade-in-up">Introduction to Django</h1>
        
        {/* Author Note*/}
        <p className="author">Author: Jina</p>

        {/* Introduction */}
        <p className="body">
            Django is a <span className="font-bold">Python web framework</span> that helps developers build websites
            and web applications quickly, and efficiently. It has a lot of powerful built-in features, which eliminates
            the need for developers to code funcctions from scratch. In essence, Django helps you focus on building applications 
            while handling the common web development tasks for you. 
        </p>
          <Link
            href="https://docs.djangoproject.com/en/5.2/intro/tutorial01/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800">
            Official Django Website Tutorial
          </Link> 
        <p className="body"> 
            This official Django website has a very thorough tutorial that I HIGHLY recommend you follow. The following is just 
            a preview you can read to better understand the concepts being introduced on their tutorial. 
        </p>
        
        {/* Django Corporate Office Analogy */}
        <h2 className="subheading">Analogy - Corporate Office (Site Level) and Individual Business (App Level) </h2>
        <p className="body">
          To explain the basics of Django, I will use an analogy to breakdown the relationships between the different Django components.
        </p>
        <Image 
          src="/images/django/analogy.png"
          alt="Django Corporate Analogy"
          width={500}
          height={500}
          className="fade-in-up rounded-lg"
        />

        <h2 className="subheading">Framework for Django Corporate Analogy</h2>
        <Image 
          src="/images/django/django-analogy-framework.png"
          alt="Django Analogy Framework"
          width={500}
          height={500}
          className="fade-in-up rounded-lg"
        />
        <p className="body">
          Now that you're familiar with the analogy framework, let's do an example walk through.
        </p>

        {/* Django Analogy Walkthrough */}
        


      
     </div>
    </main>
  );
}