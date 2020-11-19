import React from "react";
import { API_URL } from "../../global_variable";
import useFetch from "../useFetch";
import "./_StudentWork.scss";

export default function StudentWork() {
  const studentWork = useFetch(
    `${API_URL}/wp-json/wp/v2/projects?per_page=100`
  );

  return studentWork != null ? (
    <div className="project-list">
      {studentWork.map((d, index) =>
        d.slug === "zaila" || d.slug === "nearest" || d.slug === "lair" ? (
          <div className="student-work-image" key={index}>
            <img src={d.acf.app_picture} alt="app-img" />
          </div>
        ) : null
      )}
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
