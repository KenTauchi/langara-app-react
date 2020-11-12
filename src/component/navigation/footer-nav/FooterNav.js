import React from "react";
import useFetch from "../../useFetch";
import "./_FooterNav.scss";

export default function FooterNav() {
  const footerNav = useFetch(
    "http://localhost:8888/langara_web/wp-json/menu/footer"
  );
  return footerNav !== null ? (
    <div className="footer-menu">
      <ul>
        {footerNav.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="copyright">
        <p>&copy; 2020 Langara College all rights reserved</p>
      </div>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
