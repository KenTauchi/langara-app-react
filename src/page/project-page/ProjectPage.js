import React from "react";
import { useParams } from "react-router-dom";

import HeaderNav from "../../component/navigation/header-nav/HeaderNav";
import FooterNav from "../../component/navigation/footer-nav/FooterNav";
import useFetch from "../../component/useFetch";

import "./ProjectPage.scss";

export default function ProjectPage() {
  let params = useParams();
  const project = useFetch(
    `http://localhost:8888/langara_web/wp-json/wp/v2/projects?slug=${params.name}`
  );

  return (
    <div>
      <HeaderNav />
      {project !== null ? (
        project.map((p) => (
          <div className="project-page">
            <h1>{p.title.rendered}</h1>
            <p>{p.status}</p>
            <div className="">
              <img src={p.acf.app_picture} />
            </div>
            <p>{p.acf.app_description}</p>

            <h2>
              <a href={p.acf.project_site_link}>
                `View Project Here (Website Link)`
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

            <div className="team-member">
              <p>The Team:</p>
              {p.project_member.map((member) => (
                <li>{member}</li>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      <FooterNav />
    </div>
  );
}
