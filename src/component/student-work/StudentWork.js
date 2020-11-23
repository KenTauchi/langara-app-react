import React from "react";
import { API_URL } from "../../global_variable";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import "./_StudentWork.scss";

export default function StudentWork() {
  const studentWork = useFetch(
    `${API_URL}/wp-json/wp/v2/projects?per_page=100`
  );

  return studentWork != null ? (
    <div className="project-list">
      {studentWork.map((d, index) =>
        d.slug === "zaila-2" || d.slug === "nearest" || d.slug === "lair" ? (
          <Link
            className="student-work-image"
            key={index}
            to={{
              pathname: `/project/${d.slug}`,
            }}
          >
            <img src={d.acf.app_picture} alt="app-img" />
          </Link>
        ) : null
      )}
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
