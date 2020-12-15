import React, { useEffect, useState } from "react";
import { API_URL } from "../../global_variable";

import useFetch from "../../component/useFetch";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  console.log(faqArr);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [expandedSub, setExpandedSub] = useState(false);
  const handleChangeSub = (panel) => (event, isExpanded) => {
    setExpandedSub(isExpanded ? panel : false);
  };

  return (
    <div>
      {faqTop !== null ? (
        <div className="faq-top">
          <h1>{faqTop.acf.faq_header}</h1>
          <p>{faqTop.acf.faq_sub_header_1}</p>
          <p>{faqTop.acf.faq_sub_header_2}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {faqArr !== null ? (
        <div>
          {faqArr.map((faq, index) =>
            faq.length !== 0 ? (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    {faq.length !== 0 ? faq[0].categories_names[0] : null}
                  </Typography>
                </AccordionSummary>
                {faq.map((qa, index) => (
                  <AccordionDetails key={qa.id} onClick={showSidebar}>
                    <Accordion
                      key={qa.id}
                      expandedSub={expandedSub === `panel${qa.id}`}
                      onChange={handleChangeSub(`panel${qa.id}`)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{qa.acf.question}</Typography>
                      </AccordionSummary>

                      <AccordionDetails key={qa.id} onClick={showSidebar}>
                        <p
                          className="answer"
                          dangerouslySetInnerHTML={{
                            __html: qa.acf.answer,
                          }}
                        ></p>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                ))}
              </Accordion>
            ) : null
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Faq;
