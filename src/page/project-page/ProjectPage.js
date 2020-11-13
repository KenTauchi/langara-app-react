import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../component/useFetch";
import dateFormat from "../../component/dateFormat";

import "./_ProjectPage.scss";

export default function ProjectPage() {
  let params = useParams();
  const project = useFetch(
    `http://localhost:8888/langara_web/wp-json/wp/v2/projects?slug=${params.name}`
  );

  return (
    <div>
      {project !== null ? (
        project.map((p) => (
          <div className="project-page">
            <h1>{p.title.rendered}</h1>
            <p>
              {p.categories_names} | {dateFormat(p.date)}
            </p>

            <div className="app-main-img">
              <img src={p.acf.app_picture} alt="app-main-pic" />
            </div>
            <p>{p.acf.app_description}</p>

            <h2>
              <a href={p.acf.project_site_link}>
                View Project Here (Website Link)
              </a>
            </h2>
            <h2>
              <a href={p.acf.case_study}>Case Study</a>
            </h2>
            <h2>
              <a href={p.acf.project_proposal_file}>
                Download Project Proposal
              </a>
            </h2>
            <div className="team-members">
              <p>The Team:</p>
              {p.project_member !== "" ? (
                p.project_member.map((member) => (
                  <div className="team-member">
                    <li>{member}</li>
                  </div>
                ))
              ) : (
                <div className="team-member">
                  <p>Team Member Info is not available for this project</p>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
