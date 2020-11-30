import React from "react";
import { API_URL } from "../../global_variable";
import useFetch from "../../component/useFetch";

import AlumniSingle from "../../component/alumni-single/AlumniSingle";

import "./_Alumni.scss";

export default function Alumni() {
  const cf = useFetch(`${API_URL}/wp-json/wp/v2/pages?slug="alumni`);

  const alumni = useFetch(`${API_URL}/wp-json/wp/v2/alumni`);

  return (
    <div className="alumni-page">
      {cf !== null ? (
        <div className="alumni-page-head">
          <h1>{cf[0].acf.title}</h1>
          <p>{cf[0].acf.page_description}</p>
        </div>
      ) : null}
      {alumni !== null ? (
        <div className="alumni-list">
          {alumni.map((alumna, index) => (
            <AlumniSingle {...alumna} key={index} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
