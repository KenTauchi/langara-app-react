import React from "react";
import { Link } from "react-router-dom";

import useFetch from "../../component/useFetch";
import "./_ProjectListPage.scss";

export default function ProjectListPage() {
  const projects = useFetch(
    `http://localhost:8888/langara_web/wp-json/wp/v2/projects?per_page=100`
  );

  return (
    <div>
      {projects !== null ? (
        <div className="project-list">
          {projects.map((project) => (
            <div>
              <Link
                to={{
                  pathname: `/project/${project.slug}`,
                }}
              >
                <img src={project.acf.app_picture} alt="app-list-img" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}
