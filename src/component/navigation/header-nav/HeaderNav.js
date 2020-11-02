import React from "react";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  const headerNav = useFetch(
    "http://localhost:8888/langara_web/wp-json/menu/primary"
  );

  return headerNav !== null ? (
    <div className="primary-menu">
      <ul>
        {headerNav.map((item) => (
          <li>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
