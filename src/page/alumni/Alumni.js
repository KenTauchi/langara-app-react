import React from "react";
import useFetch from "../../component/useFetch";

import AlumniSingle from "../../component/alumni-single/AlumniSingle";

export default function Alumni() {
  const cf = useFetch(
    'http://localhost:8888/langara_web/wp-json/wp/v2/pages?slug="alumni"'
  );

  const alumni = useFetch(
    "http://localhost:8888/langara_web/wp-json/wp/v2/alumni"
  );

  return (
    <div className="alumni-page">
      {cf !== null ? (
        <div className="alumni-page-head">
          <h1>{cf[0].acf.title}</h1>
          <p>{cf[0].acf.page_description}</p>
        </div>
      ) : null}
      {alumni !== null ? (
        alumni.map((alumna) => <AlumniSingle {...alumna} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
