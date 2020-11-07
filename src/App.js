import React from "react";

import HeaderNav from "./component/navigation/header-nav/HeaderNav";
import FooterNav from "./component/navigation/footer-nav/FooterNav";
import Router from "./component/Router";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Router />
      <FooterNav />
    </div>
  );
}

export default App;
