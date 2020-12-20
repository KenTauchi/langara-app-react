import React, { useEffect, useState } from "react";
import { API_URL } from "../../global_variable";

import useFetch from "../../component/useFetch";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FaqDeskTop = () => {
  const faqTop = useFetch(`${API_URL}/wp-json/acf/v3/pages/854`);
  const faqs = useFetch(`${API_URL}/wp-json/wp/v2/faq?per_page=100`);
  const categories = useFetch(`${API_URL}/wp-json/wp/v2/categories`);

  let faqCats =
    faqs !== null && categories !== null
      ? categories.map((cat) =>
          faqs
            .filter((faq) =>
              faq.categories_slugs.find((slug) => slug === cat.slug)
            )
            .reverse()
        )
      : null;

  const faqArr = faqCats !== null ? faqCats.reverse() : null;

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [data, setData] = useState();

  const setCategory = (category) => {
    setData(
      faqArr.filter((faq) => faq.find((qa) => qa.categories_names == category))
    );
  };

  useEffect(() => {
    return faqs !== null ? setData(faqArr) : null;
  }, [faqs]);

  const [ck, setCk] = useState("");

  const checked = (innerText) => {
    let short = innerText.toLowerCase().split(" ")[0];

    switch (short) {
      case "wmdd":
        setCk("-1");
        break;
      case "while":
        setCk("-2");
        break;
      case "post":
        setCk("-3");
        break;
      case "international":
        setCk("-4");
        break;
      case "covid":
        setCk("-5");
        break;
      default:
        setCk("");
    }
  };

  return (
    <div className="faq-desktop">
      {faqTop !== null ? (
        <div className="faq-top">
          <h1>{faqTop.acf.faq_header}</h1>
          <p>{faqTop.acf.faq_sub_header_1}</p>
          <p>{faqTop.acf.faq_sub_header_2}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="categories">
        {faqArr !== null
          ? faqArr.map((faq, index) =>
              faq.length !== 0 ? (
                <p
                  key={index}
                  className={
                    faq[0].categories_names[0].toLowerCase().split(" ")[0] + ck
                  }
                  onClick={(e) => {
                    setCategory(e.target.innerText);
                    checked(e.target.innerText);
                  }}
                >
                  {faq[0].categories_names[0]}
                </p>
              ) : null
            )
          : null}
      </div>

      {data !== undefined ? (
        <div className="faq-wrapper">
          <h1>{data[0][0].categories_names}</h1>
          {data[0].map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="faq-category">
                  {faq.acf.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails key={faq.id} onClick={showSidebar}>
                <p
                  className="answer"
                  dangerouslySetInnerHTML={{
                    __html: faq.acf.answer,
                  }}
                ></p>

                <a
                  href={faq.acf.link}
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {faq.acf.link !== undefined ? "Link" : null}
                </a>
              </AccordionDetails>
            </Accordion>
          ))}
          {data !== null ? null : <p>Please select category</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FaqDeskTop;
