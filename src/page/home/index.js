import * as React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const PageHome = ({ match }) => {
  console.log("page home -> ", match.params.stockSymbol);
  const stockCodes = [
    "MSFT",
    "AAPL",
    "INTC",
    "NFLX",
    "ORCL",
    "CMCSA",
    "GOOG",
    "LUV",
    "HOG",
    "GOOGL",
    "AMZN"
  ];
  return (
    <section className={"pagehome"}>
      <div className={"pagehome-body"}>
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <aside className="menu">
                <p className="menu-label">Stock Symbol</p>
                <ul className="menu-list">
                  {stockCodes.map((item, index) => (
                    <li
                      key={index}
                      className={
                        item === match.params.stockSymbol ? "active" : null
                      }
                    >
                      <Link to={`/${item}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">Three</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHome;
