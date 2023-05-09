import React from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "../src/styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
