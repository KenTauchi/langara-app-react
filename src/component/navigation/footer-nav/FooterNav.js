import React from "react";
import { Link } from "react-router-dom";
// import { API_URL } from "../../../global_variable";
// import useFetch from "../../useFetch";
import "./_FooterNav.scss";

import FooterNavData from "./FooterNavData";

export default function FooterNav() {
  // const footerNav = useFetch(`${API_URL}/wp-json/menu/footer`);
  const menuData = FooterNavData;

  const endPoint = (url) => {
    let pathArr = url.split("/");
    return pathArr.slice(-2)[0];
  };

  return menuData !== null ? (
    <div className="footer-menu">
      <ul>
        {menuData.map((item, index) => (
          <li key={index}>
            {item.title === "Privacy Statement" ? (
              <a href={item.url}>{item.title}</a>
            ) : (
              <Link to={`../../${endPoint(item.url)}`}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
      <div className="copyright">
        <p>&copy; 2020 Langara College. All rights reserved.</p>
      </div>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
