import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">P Gopichand Reddy</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          AEM Full Stack Engineer @ IBM | Ex-LTIMindtree | Expertise in AEM 6.4 / 6.5 / AEMaaCS | Java | Sling | HTL | OSGi | Cloud
        </p>
        <div className="space-x-4">
          <a
            href="https://wa.me/918123456789"
            target="_blank"
            className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600"
          >
            Message on WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/gopichand-reddy-5290b918b/"
            target="_blank"
            className="border border-gray-800 text-gray-800 px-6 py-2 rounded-full shadow hover:bg-gray-200"
          >
            View LinkedIn Profile
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm an AEM developer with 4+ years of experience, and I love building CMS-based websites using any tech. Right now, I'm deep into AEM, which I think is a great tool for creating robust and sustainable CMS solutions.
          <br /><br />
          I started my career working on a huge legacy real estate project for a multinational company. That project gave me hands-on experience with almost everything in AEM-building components, dialogs, pages, both static and editable templates, content fragments, experience fragments, and more. I also worked on Sling models, OSGi services, servlets, schedulers, jobs, and MongoDB integration with AEM.
          <br /><br />
          Apart from AEM, I have a solid foundation in HTML, CSS, JavaScript, Java, jQuery, Webpack, SCSS, logical CSS/SCSS, Maven, and other related tech. I enjoy API integration, fetching data, and working on performance optimizations.
          <br /><br />
          At IBM, I worked on RTL site migration, localization, MSM, Carbon Component upgrades, and now asset sync from AEM 6.5 to AEMaaCS.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "AEM 6.4 / 6.5 / AEMaaCS",
            "Java",
            "Sling",
            "HTL",
            "OSGi",
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "SCSS",
            "Webpack",
            "Maven",
            "MongoDB"
          ].map((skill) => (
            <span
              key={skill}
              className="bg-white border px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ul className="space-y-4">
          {["Realogy", "Anywhere Site", "IBM", "IBM Arabic Site"].map((project, index) => (
            <li key={index} className="border-b pb-2">
              <h3 className="text-xl font-medium">{project}</h3>
              <p className="text-gray-600">Project description coming soon.</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">gopichandreddy0877@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/gopichand-reddy-5290b918b/"
          target="_blank"
          className="underline hover:text-gray-300"
        >
          Connect on LinkedIn
        </a>
      </section>
    </div>
  );
};

export default App;
