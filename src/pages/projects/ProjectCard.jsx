import styles from "./projects.module.scss";

export const ProjectCard = ({ title, description, imgUrl,githubUrl,webUrl }) => {
  return (
    <div className={styles.singleCard}>
      <img className={styles.img} src={imgUrl} />
      <div className={styles.detailBox}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.btnsDiv}>
          <button className={styles.btn}>
            <a href={githubUrl} target="blank">Code</a>
          </button>
          <button className={styles.btn}>
            <a href={webUrl} target="blank">Live</a>
          </button>
        </div>
      </div>
    </div>
  );
};
