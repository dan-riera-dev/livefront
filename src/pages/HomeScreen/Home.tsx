import { Link } from "react-router-dom";
import { BackgroundParticles } from "../../components/BackgroundParticles";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title} aria-label="Choose your side">
          Choose your side
        </h1>
        <div className={styles.subheaderContainer}>
          <Link
            className={`${styles.subheader} ${styles.lightSubheader}`}
            to="/faction"
            state={{ isLightSide: true }}
            aria-label="Choose the Light Side"
          >
            $
          </Link>
          <Link
            className={`${styles.subheader} ${styles.darkSubheader}`}
            to="/faction"
            state={{ isLightSide: false }}
            aria-label="Choose the Dark Side"
          >
            #
          </Link>
        </div>
      </div>
      <BackgroundParticles aria-hidden="true" />
    </div>
  );
};
