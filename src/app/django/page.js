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
        <p className="body">
        Imaging you got an internship at Meta. Congratulations! It’s your dream internship and you’re super excited. 
        However, it’s your first day and you’re someone who likes to visualize what the day is going to look like. 
        So, you run the steps through your head. 
        </p>
        <ol className="ordered-list">
          <li className="ordered-item">
          As an intern, you follow the address to a huge corporate building. As you enter the office, you enter the 
          lobby and are met with a friendly front desk person. Similar to this, when navigating to a certain URL, you 
          navigate to a <span className="font-bold"> site (corporate building)</span> and end up on the
          <span className="font-bold"> landing page (lobby)</span>. In the backend, you are met with the <span className="font-bold"> URL configuration </span> 
          for the site <span className="font-bold">(front desk person)</span>. 
          </li>
          <li className="ordered-item">
          You specify to the front desk person that you are looking to get to the Meta floor. The front desk person informs you 
          that Meta will be on the 8th floor, however, from there another front desk person will help you navigate on the floor. 
          Similar to this, when you specify a specific URL endpoint, the <span className="font-bold"> site-level URL configuration (front desk) </span>
          will direct you to the specific app you’re looking for <span className="font-bold"> (Meta's floor)</span>, but will then pass on the responsibility 
          of helping you as the client to the <span className="font-bold"> app-level URL configuration (Meta's front desk)</span>. This is done via the 
          <code className="inline-code">include()</code> function, which tells Django to look inside this URL configuration to look for the rest of the URL endpoints.
          </li>
          <Image 
          src="/images/django/include-function.png"
          alt="Django Include Function"
          width={500}
          height={500}
          className="fade-
          in-up rounded-lg"
         />
         <li className="ordered-item">
          Once you make it to the Meta floor, you enter Meta’s lobby. You are met with another friendly front desk person for Meta, who asks where you need to go so they 
          can help direct you. Similar to this, when you navigate to the <span className="font-bold"> app (Meta’s floor)</span>, you land on the <span className="font-bold"> index page</span>
          for this application <span className="font-bold"> (Meta’s lobby)</span>, where you meet an <span className="font-bold"> app-level URL configuration (Meta’s front desk person) </span>
          who is now responsible for helping you navigate the application. 
         </li>
        </ol>
        <p className="body"> 
          Now that you have a general understanding of the Django framework and the relationship between <span className="font-bold"> Projects vs Apps</span>,
          it's now time to go through the Django tutorial on their official website. 
        </p>


      
     </div>
    </main>
  );
}