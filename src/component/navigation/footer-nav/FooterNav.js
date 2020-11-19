import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../global_variable";
import useFetch from "../../useFetch";
import "./_FooterNav.scss";

export default function FooterNav() {
  const footerNav = useFetch(`${API_URL}/wp-json/menu/footer`);

  const endPoint = (url) => {
    let pathArr = url.split("/");
    return pathArr.slice(-2)[0];
  };
  return footerNav !== null ? (
    <div className="footer-menu">
      <ul>
        {footerNav.map((item, index) => (
          <li key={index}>
            {/*<a href={item.url}>{item.title}</a>*/}
            <Link to={`../../${endPoint(item.url)}`}>{item.title}</Link>
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
