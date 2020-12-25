import React, { useState } from "react";
import { API_URL } from "../../global_variable";

import useFetch from "../../component/useFetch";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Third Party Libraries ========================
import ReactLoading from "react-loading";
// =============================================

const Faq = () => {
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

  // const headColor = expanded ? { color: "#f15a22" } : { color: "#707070" };

  const [expandedsub, setExpandedSub] = useState(false);
  const handleChangeSub = (panel) => (event, isExpanded) => {
    setExpandedSub(isExpanded ? panel : false);
  };

  return (
    <div className="faq">
      {faqTop !== null ? (
        <div className="faq-top">
          <h1>{faqTop.acf.faq_header}</h1>
          <p>{faqTop.acf.faq_sub_header_1}</p>
          <p>{faqTop.acf.faq_sub_header_2}</p>
          <p className="note">
            Select a category that suites your query the best.
          </p>
        </div>
      ) : (
        <div className="loading">
          <ReactLoading type={"bars"} color={"#F15a22"} className="bar" />
        </div>
      )}

      {faqArr !== null ? (
        <div className="faq-wrapper">
          {faqArr.map((faq, index) =>
            faq.length !== 0 ? (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className="faq-category">
                    {faq.length !== 0 ? faq[0].categories_names[0] : null}
                  </Typography>
                </AccordionSummary>
                {faq.map((qa, index) => (
                  <AccordionDetails key={qa.id} onClick={showSidebar}>
                    <Accordion
                      className="inner-accordion"
                      key={qa.id}
                      expandedsub={
                        typeof expandedsub === "boolean"
                          ? expandedsub === `panel${qa.id}`
                          : undefined
                      }
                      onChange={handleChangeSub(`panel${qa.id}`)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="questoin">
                          {qa.acf.question}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails key={qa.id} onClick={showSidebar}>
                        <p
                          className="answer"
                          dangerouslySetInnerHTML={{
                            __html: qa.acf.answer,
                          }}
                        ></p>

                        <a
                          href={qa.acf.link}
                          className="link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {qa.acf.link !== undefined ? "More details" : null}
                        </a>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                ))}
              </Accordion>
            ) : null
          )}
        </div>
      ) : (
        <div className="loading">
          <ReactLoading type={"bars"} color={"#F15a22"} className="bar" />
        </div>
      )}
    </div>
  );
};

export default Faq;
