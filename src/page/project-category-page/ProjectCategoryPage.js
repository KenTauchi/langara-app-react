import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../component/useFetch";
import StudentWorkIntro from "../../component/student-work/student-work-intro/StudentWorkIntro";

export default function ProjectCategoryPage() {
  let params = useParams();
  const projects = useFetch(
    `http://localhost:8888/langara_web/wp-json/wp/v2/projects?categories=${params.category}`
  );

  return (
    <div className="project-category-page">
      {projects !== null && projects.length !== 0 ? (
        <div>
          <h1>{projects[0].categories_names}</h1>
          <p>{projects[0].categories_description}</p>
          {projects.map((project) => (
            <StudentWorkIntro {...project} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
