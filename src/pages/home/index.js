import React from "react";
import Lottie from "lottie-react";
import handWave from "../../assets/svgs/handWave.json";
import candiate from "../../assets/images/Candidate.JPG";
import Typed from "react-typed";
import Particle from "./Particle";
import styles from "./home.module.scss";
import { socialLinks } from "../../utils/socialLinks";

const index = () => {
  return (
    <>
      <Particle />
      <div className={styles.home}>
        <span className={styles.title}>
          Hi
          <Lottie className={styles.handwave} animationData={handWave} />, I'm{" "}
          <b className={styles.name}>Shiva Epili</b>
        </span>

        <img className={styles.candiate_img} src={candiate} alt="img" />

        <span className={styles.job_title}>
          <Typed
            strings={[
              "I'm a Web Developer.",
              "I'm a Frontend Developer.",
              "I'm a FreeLancer.",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </span>
        <div className={styles.icons}>
          {socialLinks.map((item, id) => {
            return (
              <a
                key={id}
                className={styles.icon}
                target="_blank"
                rel="noreferrer"
                href={item.link}
              >
                <Lottie animationData={item.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
