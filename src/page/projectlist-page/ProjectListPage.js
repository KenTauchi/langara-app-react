import React from "react";
import { API_URL } from "../../global_variable";
import { Link } from "react-router-dom";

import useFetch from "../../component/useFetch";
import StudentWorkIntro from "../../component/student-work/student-work-intro/StudentWorkIntro";
import "./_ProjectListPage.scss";

export default function ProjectListPage() {
  const projects = useFetch(`${API_URL}/wp-json/wp/v2/projects?per_page=100`);

  const categories = useFetch(`${API_URL}/wp-json/wp/v2/categories`);

  let foundCats =
    categories !== null ? categories.map((category) => category.slug) : null;

  let projectCats =
    foundCats !== null && projects !== null
      ? foundCats.map((cat) =>
          projects.filter((p) =>
            p.categories_slugs.find((slug) => slug === cat)
          )
        )
      : null;

  console.log("projects by category", projectCats);

  return (
    <div className="project-list-page">
      {projectCats !== null ? (
        projectCats.map((projectCat) =>
          projectCat.length !== 0 ? (
            <div className="project-category">
              <h1>{projectCat[0].categories_names[0]}</h1>
              <p
                className="intro-desc"
                dangerouslySetInnerHTML={{
                  __html: projectCat[0].categories_description[0],
                }}
              ></p>
              <div className="project-cat-list">
                {projectCat.map((project, index) =>
                  index > 2 ? null : <StudentWorkIntro {...project} />
                )}
              </div>

              <Link
                className="view-more"
                to={{
                  pathname: `/projects/category/${projectCat[0].categories}`,
                }}
              >
                <span>View More</span>
              </Link>
            </div>
          ) : null
        )
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
