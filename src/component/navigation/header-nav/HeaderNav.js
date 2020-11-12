import React, { useState } from "react";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Logo from "../../../assets/logo.svg";

import "./_HeaderNav.scss";

export default function HeaderNav() {
  const headerNav = useFetch(
    "http://localhost:8888/langara_web/wp-json/menu/primary"
  );

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const {submenu, setSubmenu} = useState(null);
  const endPoint = (url) => {
    let pathArr = url.split("/");
    return pathArr.slice(-2)[0];
  };

  return headerNav !== null ? (
    <div className="primary-menu">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li>
            <Link>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {headerNav.map((item, index) =>
            item.title === "The Program" ? (
              <Accordion
                key={index}
                expanded={expanded === `panel${item.Id}`}
                onChange={handleChange(`panel${item.Id}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${item.Id}bh-content`}
                  id={`panel${item.Id}bh-header`}
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                {headerNav.map((navItem, index) =>
                  navItem.menu_item_parent !== "0" ? (
                    <AccordionDetails key={index} onClick={showSidebar}>
                      <Typography>
                        <Link to={`../../${endPoint(navItem.url)}`}>
                          {navItem.title}
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  ) : null
                )}
              </Accordion>
            ) : item.menu_item_parent === "0" ? (
              <li className="menu-item" key={index} onClick={showSidebar}>
                <Link to={`../../${endPoint(item.url)}`}>{item.title}</Link>
              </li>
            ) : null
          )}
        </ul>
      </nav>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
