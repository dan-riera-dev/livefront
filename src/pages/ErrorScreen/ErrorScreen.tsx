import { BackgroundParticles } from "../../components/BackgroundParticles";
import errorImage from "../../assets/images/errorImage.png";
import styles from "./ErrorScreen.module.css";
import { Link } from "react-router-dom";
export const ErrorScreen = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <img src={errorImage} className={styles.imageStyle} alt="" />
        <h1 className={styles.title}>Beep boop beep..</h1>
        <p className={styles.subHeader}>Please try again later</p>
        <Link className={styles.homeButton} to="/">
          Home
        </Link>
      </div>
      <BackgroundParticles />
    </div>
  );
};
