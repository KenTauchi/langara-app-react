import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import TopPage from "../page/top-page/TopPage";
import AboutUsMain from "../page/about-us-main/AboutUsMain";
import Instructors from "../page/instructors/Instructors";
import Alumni from "../page/alumni/Alumni";
import ProjectPage from "../page/project-page/ProjectPage";
import ProjectListPage from "../page/projectlist-page/ProjectListPage";
import ProjectCategoryPage from "../page/project-category-page/ProjectCategoryPage";
import NewsEventsListPage from "../page/news-events-list-page/NewsEventsListPage";
import NewsEventsPage from "../page/news-events-page/NewsEventsPage";
import AboutThisSite from "../page/about-this-site/AboutThisSite";
import Contact from "../page/contact/Contact";
import Faq from "../page/faq/Faq";
import FaqDeskTop from "../page/faq/FaqDeskTop";
import ComingSoon from "../component/coming-soon/ComingSoon";

export default function Router() {
  const [width, setWidth] = useState(0);
  const updateSize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [width]);

  return (
    <Switch>
      <Route exact path="/" component={TopPage} />
      <Route exact path="/about-us" component={AboutUsMain} />
      <Route exact path="/instructors" component={Instructors} />
      <Route exact path="/alumni" component={Alumni} />
      <Route exact path="/projects" component={ProjectListPage} />
      <Route
        exact
        path="/projects/category/:category"
        component={ProjectCategoryPage}
      />
      <Route path="/project/:name" component={ProjectPage} />
      <Route exact path="/news-and-events" component={NewsEventsListPage} />
      <Route exact path="/news-and-events/:title" component={NewsEventsPage} />
      <Route exact path="/about-this-site" component={AboutThisSite} />

      <Route exact path="/contact" component={Contact} />
      {width < 1200 ? (
        <Route exact path="/faq" component={Faq} />
      ) : (
        <Route exact path="/faq" component={FaqDeskTop} />
      )}

      <Route exact path="/about-this-site" component={ComingSoon} />
    </Switch>
  );
}
