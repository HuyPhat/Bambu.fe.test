import * as React from "react";
// import styles from "./footer.scss";
import styles from "./footer.css";

export default () => {
  return (
    <footer className={styles.footer}>
      <div className="content has-text-centered">
        <p>
          <strong>Bulma</strong> by{" "}
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
