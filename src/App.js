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
        contentStyle={{ color: "#FFFFFF" }}
        style={{ background: "#F15a22", padding: ".5rem 0" }}
        buttonStyle={{
          color: "#F15a22",
          fontSize: "13px",
          padding: ".5rem 1.5rem",
          background: "#FFFFFF",
        }}
        declineButtonStyle={{
          background: "#f15a22",
          color: "#ffffff",
          padding: "0",
        }}
        expires={150}
        // debug={true}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </div>
  );
}

export default App;
