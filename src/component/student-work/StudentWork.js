import React, { useEffect, useState } from "react";

import useFetch from "../useFetch";

export default function StudentWork() {
  const studentWork = useFetch(
    "http://localhost:8888/langara_web/wp-json/wp/v2/projects"
  );

  console.log("data", studentWork);

  return studentWork != null ? (
    <div>
      {studentWork.map((d) => (
        <h2>{d.title.rendered}</h2>
      ))}
      <h1></h1>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
