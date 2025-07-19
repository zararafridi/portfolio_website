import React from "react";

function ProjectCard() {
  return (
    <div className="w-[600px] border-2 border-cyan-400 border-double p-2 rounded-2xl ">
      <img
        className=" w-full rounded-2xl"
        src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Project card"
      />
      <h2 className=" text-2xl font-bold">CoinBounce-A blogging platform use to Create Blog</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam? Alias ullam eos molestias dolor sequi sint, eveniet illo eligendi.</span>
    </div>
  );
}

export default ProjectCard;
