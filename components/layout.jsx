import React from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "../src/styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
