import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageHome from "page/home";
import Header from "components/common/header";
import Footer from "components/common/footer";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={PageHome} />
          <Route exact path="/:stockSymbol" component={PageHome} />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
