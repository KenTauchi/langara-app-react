import React from "react";
import useFetch from "../../component/useFetch";
import "./_Contact.scss";

export default function Contact() {
  const contact = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/402"
  );

  return contact !== null ? (
    <div className="contact-us-page">
      <h1>{contact.acf.contact_us_title}</h1>
      <span>{contact.acf.langara_official_email}</span>
      <span>{contact.acf.langara_address}</span>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.732352763874!2d-123.11087518431248!3d49.224602779324925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486746f412563f7%3A0x36606d221509fdfe!2sLangara%20College!5e0!3m2!1sen!2sca!4v1603316412018!5m2!1sen!2sca"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="google-map"
        ></iframe>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
