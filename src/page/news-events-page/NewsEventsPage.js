import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../component/useFetch";
import NewsEventsSingle from "../../component/news-events/NewsEventsSingle/NewsEventsSingle";

export default function NewsEventsPage() {
  let params = useParams();
  const news = useFetch(
    `http://localhost:8888/langara_web/wp-json/wp/v2/news_and_events?slug=${params.title}`
  );

  console.log("params title", params.title);
  return (
    <div className="news-event-page">
      {news !== null
        ? news.map((info) => <NewsEventsSingle {...info} />)
        : null}
    </div>
  );
}
