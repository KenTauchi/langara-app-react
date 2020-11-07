import React from "react";
import { Switch, Route } from "react-router-dom";
import TopPage from "../page/top-page/TopPage";
import AboutUsMain from "../page/about-us-main/AboutUsMain";
import Instructors from "../page/instructors/Instructors";
import ProjectPage from "../page/project-page/ProjectPage";
import ProjectListPage from "../page/projectlist-page/ProjectListPage";
import NewsEventsListPage from "../page/news-events-list-page/NewsEventsListPage";
import NewsEventsPage from "../page/news-events-page/NewsEventsPage";
// import StudentWork from "./student-work/StudentWork";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={TopPage} />
      <Route exact path="/about-us-main-page/" component={AboutUsMain} />
      <Route exact path="/instructors/" component={Instructors} />
      <Route exact path="/projects/" component={ProjectListPage} />
      <Route path="/project/:name" component={ProjectPage} />
      <Route exact path="/news_and_events" component={NewsEventsListPage} />
      <Route path="/news_and_events/:title" component={NewsEventsPage} />
    </Switch>
  );
}
