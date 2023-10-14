import React, { Fragment } from "react";
import styles from "./projects.module.scss";
import Project from "../../assets/svgs/project.json";
import Lottie from "lottie-react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../utils/projectsData";




const index = () => {
  return (
    <Fragment>
      <div className={styles.inner}>
        <div className={styles.pic}>
          <Lottie animationData={Project} />
        </div>
        <div className={styles.caption}>
          <h1>
            Personal <span style={{ color: "#f09d04" }}>Projects</span>
          </h1>
          <p>
            {" "}
            An investment in knowledge pays the best interest. <br /> – Benjamin
            Franklin
          </p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </Fragment>
  );
};

export default index;
