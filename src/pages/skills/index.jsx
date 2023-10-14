import React, { Fragment } from "react";
import { Skills, skillsImage } from "../../utils/skillsData";
import Marquee from "react-fast-marquee";
import styles from "./skills.module.scss";
import Lottie from "lottie-react";
import skills from "../../assets/svgs/skills.json";

const index = () => {
  return (
    <Fragment>
      <div className={styles.inner}>
        <div className={styles.pic}>
          <Lottie animationData={skills} />
        </div>
        <div className={styles.caption}>
          <h1>
            My <span style={{ color: "#1aacac" }}>Skills</span>
          </h1>
          <p>
            I try to take Responsibility to craft Interactive User Experience
            using modern Frontend Architecture
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        {Skills.map((item, id) => {
          return (
            <div
              key={id}
              className={`${styles.skillsSelection} ${styles.displayView}`}
            >
              <div className={styles.skillsHeader}>
                <span>{item?.title}</span>
              </div>
              <div className={styles.skillContainer}>
                <div className={styles.skill_scroll}>
                  <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={item?.slide}
                    direction="right"
                  >
                    {item?.images.map((skill, id) => (
                      <div className={styles.skillBox} key={id}>
                        <img
                          className={styles.image}
                          src={skillsImage(skill)}
                          alt={skill}
                        />
                        <h3 className={styles.skillText}>{skill}</h3>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default index;
