import { BackgroundParticles } from "../../components/BackgroundParticles";
import useFetch from "../../hooks/useFetch";
import { ErrorScreen } from "../ErrorScreen";
import * as styles from "./Home.styles";

export const Home = () => {
  const { data, loading, error } = useFetch(
    "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json"
  );
  console.log(data);
  if (loading) return null;
  if (error) return <ErrorScreen />;
  return (
    <div style={styles.outterContainer}>
      <div style={styles.innerContainer}>
        <h1 style={styles.title}>Choose your side</h1>
        <div style={styles.subheaderContainer}>
          <h2 style={styles.subheader}>$</h2>
          <h2 style={styles.subheader}>#</h2>
        </div>
      </div>
      <BackgroundParticles />
    </div>
  );
};
