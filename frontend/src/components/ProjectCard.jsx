import React from "react";

function ProjectCard({width,title,content,image}) {
  return (
    <div className={`${width} flex flex-col gap-2  p-2 rounded-2xl `}>
      <img
        className=" w-full rounded-2xl"
        src={image}
        alt="Project card"
      />
      <h2 className=" text-2xl font-bold mt-2">{title}</h2>
      <span className=" opacity-85">{content}</span>
    </div>
  );
}

export default ProjectCard;
