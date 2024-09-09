import { BackgroundParticles } from "../../components/BackgroundParticles";
import styles from "./LoadingScreen.module.css";
export const LoadingScreen = () => {
  return (
    <div className={styles.outerContainer}>
      <BackgroundParticles aria-hidden="true" />
    </div>
  );
};
