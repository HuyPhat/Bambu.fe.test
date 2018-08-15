import * as React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import api, { TIME_SERIES } from "api";

class PageHome extends React.PureComponent {
  // console.log("page home -> ", this.props.match.params.stockSymbol);
  constructor(props) {
    super(props);
    this.stockCodes = [
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
    this.state = {
      data: null,
      requestError: null,
      networkError: null
    };
  }

  clickStockSymbol = stockSymbol => async () => {
    // (timeSeries, symbol)
    console.log("stockSymbol: ", stockSymbol);
    try {
      const result = await api.getStockTimeSeries(
        TIME_SERIES.TIME_SERIES_DAILY,
        stockSymbol
      );
      console.log(result);
      if (result.statusText === "OK" || result.status === 200) {
        this.setState({ data: result.data });
      } else {
        this.setState({ requestError: result.data.error });
      }
    } catch (error) {
      console.log(error);
      this.setState({ networkError: error });
    }
  };

  render() {
    return (
      <section className={"pagehome"}>
        <div className={"pagehome-body"}>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <aside className="menu">
                  <p className="menu-label">Stock Symbol</p>
                  <ul className="menu-list">
                    {this.stockCodes.map((item, index) => (
                      <li
                        key={index}
                        className={
                          item === this.props.match.params.stockSymbol
                            ? "active"
                            : null
                        }
                      >
                        <Link
                          to={`/${item}`}
                          onClick={this.clickStockSymbol(item)}
                        >
                          {item}
                        </Link>
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
  }
}

export default PageHome;
