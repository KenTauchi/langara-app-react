import React from "react";
import { Switch, Route } from "react-router-dom";
import TopPage from "../page/top-page/TopPage";
import AboutUsMain from "../page/about-us-main/AboutUsMain";
import Instructors from "../page/instructors/Instructors";
import ProjectPage from "../page/project-page/ProjectPage";
import ProjectListPage from "../page/projectlist-page/ProjectListPage";
// import StudentWork from "./student-work/StudentWork";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={TopPage} />
      <Route exact path="/about-us-main-page/" component={AboutUsMain} />
      <Route exact path="/instructors/" component={Instructors} />
      <Route exact path="/projects/" component={ProjectListPage} />
      <Route path="/project/:name" component={ProjectPage} />
    </Switch>
  );
}
