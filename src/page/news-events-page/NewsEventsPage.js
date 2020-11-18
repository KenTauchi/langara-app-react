import React from "react";
import { API_URL } from "../../global_variable";
import { useParams } from "react-router-dom";
import useFetch from "../../component/useFetch";
import NewsEventsSingle from "../../component/news-events/NewsEventsSingle/NewsEventsSingle";

export default function NewsEventsPage() {
  let params = useParams();
  const news = useFetch(
    `${API_URL}/wp-json/wp/v2/news-and-events?slug=${params.title}`
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
