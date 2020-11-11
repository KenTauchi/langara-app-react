import React, { useEffect, useState } from "react";

import useFetch from "../../component/useFetch";
import "./_NewsEventsListPage.scss";
// import NewsEventsPage from "../news-events-page/NewsEventsPage;
import NewsEventsIntro from "../../component/news-events/NewsEventsIntro/NewsEventsIntro";

export default function NewsEventsListPage() {
  const newsEventsTop = useFetch(
    `http://localhost:8888/langara_web/wp-json/wp/v2/news-and-events?orderby=date&order=desc&per_page=3`
  );

  const newsEventsAll = useFetch(
    `http://localhost:8888/langara_web/wp-json/wp/v2/news-and-events?orderby=date&order=desc`
  );

  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);

  const dataSet = load ? newsEventsAll : newsEventsTop;

  useEffect(() => {
    setData(dataSet);
  }, [dataSet]);

  return data !== null ? (
    <div className="news-events-list-page">
      {data.map((news) => (
        <NewsEventsIntro
          title={news.title.rendered}
          date={news.date}
          article={news.acf.section1_article}
          path={news.slug}
          img={news.acf.article_image}
        />
      ))}
      <p onClick={() => setLoad(!load)}>{!load ? "View More" : "View Less"}</p>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
