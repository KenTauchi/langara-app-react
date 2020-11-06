import React from "react";
import { Link } from "react-router-dom";

import HeaderNav from "../../component/navigation/header-nav/HeaderNav";
import FooterNav from "../../component/navigation/footer-nav/FooterNav";
import useFetch from "../../component/useFetch";
import "./_ProjectListPage.scss";
import ProjectPage from "../project-page/ProjectPage";

export default function ProjectListPage() {
  const projects = useFetch(
    `http://localhost:8888/langara_web/wp-json/wp/v2/projects?per_page=100`
  );

  return (
    <div>
      <HeaderNav />
      {projects !== null ? (
        <div className="project-list">
          {projects.map((project) => (
            <div>
              <Link
                to={{
                  pathname: `/project/${project.slug}`,
                }}
              >
                <img src={project.acf.app_picture} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      <FooterNav />
    </div>
  );
}
