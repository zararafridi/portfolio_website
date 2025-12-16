import React from "react";
import PNG from "../assets/undraw_pair-programming_9jyg.svg";

function FullStackCard() {
  return (
    <section className="min-h-[70vh] py-16 px-4 md:px-20">
      <h2 className="text-5xl md:text-7xl font-bold text-center mb-12 text-slate-800">
        What I Do?
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={PNG}
            alt="Full Stack Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <h3 className="text-3xl md:text-5xl font-semibold text-violet-600">
            Full Stack Web Development
          </h3>
          <p className="text-lg text-slate-700">
            I specialize in building responsive, dynamic web applications using
            <span className="font-semibold"> React.js, Redux Toolkit, and Tailwind CSS</span> on the frontend.
          </p>
          <p className="text-lg text-slate-700">
            For the backend, I use <span className="font-semibold">Node.js, Express.js</span>, and secure
            REST APIs — all connected to robust databases like
            <span className="font-semibold"> MongoDB & Appwrite</span>.
          </p>
          <p className="text-lg text-slate-700">
            My workflow includes tools like <span className="font-semibold">Git, Postman, JWT, Firebase</span>, and
            <span className="font-semibold"> Vercel</span> to ensure smooth development and deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FullStackCard;
