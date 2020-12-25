import React, { useEffect, useState } from "react";
import "./_NewsEventsListPage.scss";

import { API_URL } from "../../global_variable";

import useFetch from "../../component/useFetch";
import "./_NewsEventsListPage.scss";
import NewsEventsIntro from "../../component/news-events/NewsEventsIntro/NewsEventsIntro";

// Third Party Libraries ========================
import ReactLoading from "react-loading";
// =============================================

export default function NewsEventsListPage() {
  const newsEventsTop = useFetch(
    `${API_URL}/wp-json/wp/v2/news-and-events?orderby=date&order=desc&per_page=3`
  );

  const newsEventsAll = useFetch(
    `${API_URL}/wp-json/wp/v2/news-and-events?orderby=date&order=desc`
  );

  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);

  const dataSet = load ? newsEventsAll : newsEventsTop;

  useEffect(() => {
    setData(dataSet);
  }, [dataSet]);

  return data !== null ? (
    <div className="news-events-list-page">
      {data.map((news, index) => (
        <NewsEventsIntro
          title={news.title.rendered}
          date={news.date}
          article={news.acf.section1_article}
          path={news.slug}
          img={news.acf.article_image}
          key={index}
          index={index}
        />
      ))}
      <p className="load-news-events" onClick={() => setLoad(!load)}>
        {!load ? "View More" : "View Less"}
      </p>
    </div>
  ) : (
    <div className="loading">
      <ReactLoading type={"bars"} color={"#F15a22"} className="bar" />
    </div>
  );
}
