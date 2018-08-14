import * as React from "react";
// import Header from "components/common/header";
// import Footer from "components/common/footer";

const PageHome = () => {
  return (
    <div className="page-home">
      <main>
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <aside className="menu">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <a>Customers</a>
                  </li>
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
      </main>
    </div>
  );
};

export default PageHome;
