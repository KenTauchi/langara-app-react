import React from "react";

import HeaderNav from "./component/navigation/header-nav/HeaderNav";
import FooterNav from "./component/navigation/footer-nav/FooterNav";
import Router from "./component/Router";

import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Router />
      <FooterNav />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        enableDeclineButton
        declineButtonText="Decline(optional)"
        cookieName="langaraWMDD"
        style={{ background: "#F15A22", padding: ".5rem 0" }}
        buttonStyle={{ color: "#707070", fontSize: "13px" }}
        expires={150}
        // debug={true}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </div>
  );
}

export default App;
