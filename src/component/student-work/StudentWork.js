import React from "react";

import useFetch from "../useFetch";
import "./_StudentWork.scss";

export default function StudentWork() {
  const studentWork = useFetch(
    "http://localhost:8888/langara_web/wp-json/wp/v2/projects?per_page=100"
  );

  return studentWork != null ? (
    <div>
      {studentWork.map((d, index) =>
        d.slug === "langara-plus" ||
        d.slug === "nearest" ||
        d.slug === "lair" ? (
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
