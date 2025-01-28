const projects = [
  {
    title: "Mini Golf Mania",
    description: "A phyics based mini-golf game where you challenge your friends online!",
    link: "minigolf-mania"
  }
];

// Function to get projects
export function getProjects() {
  // add /project/ to each project's link
  const updatedProjects = projects.map((project) => ({
    ...project,
    link: `/project/${project.link}`
  }));

  return updatedProjects;
}