import React from "react";
import PNG from "../assets/undraw_pair-programming_9jyg.svg";

function FullStackCard() {
  return (
    <section className="min-h-[70vh]" >
      <h2 className="text-7xl font-bold text-center mb-10 text-gray-700">
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
        <div className="flex-1 space-y-4">
          <h3 className="  md:text-5xl font-semibold text-purple-700">
            Full Stack Web Development
          </h3>
          <p className="text-lg text-gray-700">
            I build responsive and scalable web apps using React, Redux, and
            Tailwind on the frontend, and Node.js with Express on the backend.
          </p>
          <p className="text-lg text-gray-700">
            I integrate secure REST APIs and manage databases using MongoDB. I
            follow best practices in clean code, performance, and deployment.
          </p>
          <p className="text-lg text-gray-700">
            Tools I use: Git, Postman, Vercel, Firebase, JWT, and Appwrite.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FullStackCard;
