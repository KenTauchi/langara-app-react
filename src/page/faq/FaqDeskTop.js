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
                <p key={index} onClick={(e) => setCategory(e.target.innerHTML)}>
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

                <a href={faq.acf.link} className="link">
                  {faq.acf.link}
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
