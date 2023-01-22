import React, { useEffect, useContext } from "react";

import { Carousal } from "../../components/Carousal";
import styles from "./home.module.css";
import { ListenerContext } from "../../Contexts/ListenerProvider";
import { SimpleSlider } from "../../components/SimpleSlider";
import { Banner } from "../Banner";
import Final1 from "../../components/Carousel1/Final";
import Details from "../Details";
import Final2 from "../../components/Carousel2/Final";
import Qna from "../Qna";
import Header from "../../components/Header";

export const Home = () => {
  const { setWidth } = useContext(ListenerContext);

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  const reportWindowSize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <>
      <Header />
      <div className={styles.container} style={{ boxSizing: "border-box" }}>
        <div style={{ marginTop: 50 }}>
          <Carousal />
        </div>
        <div style={{ marginTop: 80 }}>
          <SimpleSlider />
        </div>
        <div className={styles.poster}>
          <img
            src="https://mmt.servedbyadbutler.com/getad.img/;libID=3707123"
            style={{ width: "100%", height: "80%" }}
            alt="1"
          />
        </div>
        <div style={{ marginTop: 50 }}>
          <Banner />
        </div>
      </div>

      <Final1 />
      <Final2 />
      <Details />
      <Qna />
    </>
  );
};
