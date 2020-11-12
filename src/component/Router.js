import React from "react";
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
// import StudentWork from "./student-work/StudentWork";

export default function Router() {
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
    </Switch>
  );
}
