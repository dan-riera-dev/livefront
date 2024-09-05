import { BackgroundParticles } from "../../components/BackgroundParticles";
import errorImage from "../../assets/images/errorImage.png";
import * as styles from "./ErrorScreen.styles";
export const ErrorScreen = () => {
  return (
    <div style={styles.outterContainer}>
      <div style={styles.innerContainer}>
        <img src={errorImage} style={styles.imageStyle} />
        <h1 style={styles.title}>Beep boop beep..</h1>
        <p style={styles.subHeader}>Please try again later</p>
      </div>
      <BackgroundParticles />
    </div>
  );
};
