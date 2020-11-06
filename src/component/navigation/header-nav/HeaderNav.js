import React, { useState } from "react";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

  return headerNav !== null ? (
    <div className="primary-menu">
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
                {headerNav.map((navItem) =>
                  navItem.menu_item_parent !== "0" ? (
                    <AccordionDetails>
                      <Typography>
                        <a href={navItem.url}>{navItem.title}</a>
                      </Typography>
                    </AccordionDetails>
                  ) : null
                )}
              </Accordion>
            ) : item.menu_item_parent == "0" ? (
              <li className="menu-item">
                <a href={item.url}>{item.title}</a>
              </li>
            ) : null
          )}
        </ul>
      </nav>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
