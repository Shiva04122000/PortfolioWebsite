import React from "react";
import Lottie from "lottie-react";
import education from "../../assets/svgs/education.json";
import styles from "./education.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const index = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.pic}>
            <Lottie animationData={education} />
          </div>
          <div className={styles.caption}>
            <h1>
              Educational <span style={{ color: "#ffc727" }}>
                Background
              </span>{" "}
            </h1>
            <p>
              {" "}
              An investment in knowledge pays the best interest. <br /> –
              Benjamin Franklin
            </p>
          </div>
        </div>
      </div>
      <div className="education-details" style={{ marginBottom: "3rem" }}>
        <VerticalTimeline lineColor="#ffc727">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "rgb(56 0 255)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2016"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary School Certificate (SSC)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              New Model English High School, Maharastra State Board
            </h4>
            <p>Aggregate Percentage - 73%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px ",
            }}
            className="vertical-timeline-element--work"
            date="2016 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary School Certificate (HSC)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              N. G. Acharya & D. K. Marathe College, Maharastra State Board
            </h4>
            <p>Aggregate Percentage - 63.38%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "rgb(56 0 255)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            className="vertical-timeline-element--work"
            date="2018 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              Chhatrapati Shivaji Maharaj Institute of Technology , Mumbai
              University
            </h4>
            <p> Aggregate Percentage - 71.25%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px ",
            }}
            className="vertical-timeline-element--work"
            date="2022 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer ( React )
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              Nimap Infotech , Lower Parel
            </h4>
            <p>Software Developer</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default index;
