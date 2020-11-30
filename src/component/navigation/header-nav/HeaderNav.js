import React, { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import { API_URL } from "../../../global_variable";
import { Link } from "react-router-dom";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Logo from "../../../assets/logo.svg";
import Hamburger from "../../../assets/hamburger.svg";
import Cross from "../../../assets/cross.svg";

import "./_HeaderNav.scss";

export default function HeaderNav() {
  const headerNav = useFetch(`${API_URL}/wp-json/menu/primary`);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const endPoint = (url) => {
    let pathArr = url.split("/");
    return pathArr.slice(-2)[0];
  };

  const [width, setWidth] = useState(0);
  const updateSize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [width]);

  return headerNav !== null && width < 1200 ? (
    <div className="primary-menu">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      <Link to="#" className="menu-bars">
        <img
          className="hamburger"
          src={Hamburger}
          onClick={showSidebar}
          alt="hamurger"
        />
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li>
            <span>
              <img
                className="cross"
                src={Cross}
                onClick={showSidebar}
                alt="cross"
              />
            </span>
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
                  // aria-controls={`panel${item.Id}bh-content`}
                  // id={`panel${item.Id}bh-header`}
                >
                  <Typography onClick={() => setExpanded(false)}>
                    {item.title}
                  </Typography>
                </AccordionSummary>
                {headerNav.map((navItem, index) =>
                  navItem.menu_item_parent !== "0" ? (
                    <AccordionDetails key={index} onClick={showSidebar}>
                      <Typography>
                        <Link
                          to={`../../${endPoint(navItem.url)}`}
                          onClick={() => setExpanded(false)}
                        >
                          {navItem.title}
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  ) : null
                )}
              </Accordion>
            ) : item.menu_item_parent === "0" ? (
              <li className="menu-item" key={index} onClick={showSidebar}>
                <Link
                  to={`../../${endPoint(item.url)}`}
                  onClick={() => setExpanded(false)}
                >
                  {item.title}
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </nav>
    </div>
  ) : headerNav !== null && width > 1200 ? (
    <div className="primary-menu">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
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
                        <Link
                          to={`../../${endPoint(navItem.url)}`}
                          onClick={() => setExpanded(false)}
                        >
                          {navItem.title}
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  ) : null
                )}
              </Accordion>
            ) : item.menu_item_parent === "0" ? (
              <li className="menu-item" key={index} onClick={showSidebar}>
                <Link
                  to={`../../${endPoint(item.url)}`}
                  onClick={() => setExpanded(false)}
                >
                  {item.title}
                </Link>
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
