import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../global_variable";
import { useParams } from "react-router-dom";
import useFetch from "../../component/useFetch";
import StudentWorkIntro from "../../component/student-work/student-work-intro/StudentWorkIntro";

import "./_ProjectCategoryPage.scss";

export default function ProjectCategoryPage() {
  let params = useParams();
  const projects = useFetch(
    `${API_URL}/wp-json/wp/v2/projects?categories=${params.category}`
  );

  return (
    <div className="project-category-page">
      {projects !== null && projects.length !== 0 ? (
        <div>
          <div className="category-route">
            <Link
              to={{
                pathname: `/projects`,
              }}
            >
              Student Work >
            </Link>{" "}
            {projects[0].categories_names}
          </div>
          <h1>{projects[0].categories_names}</h1>
          <p className="intro-desc-top">
            {" "}
            {projects[0].categories_description}
          </p>
          <div className="project-cat-list">
            {projects.map((project) => (
              <StudentWorkIntro {...project} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
