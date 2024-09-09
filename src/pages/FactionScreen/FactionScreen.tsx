import { Link, useLocation, useNavigate } from "react-router-dom";
import { BackgroundParticles } from "../../components/BackgroundParticles";
import { useFetch } from "../../hooks/useFetch";
import { CharacterSphere } from "../../components/CharacterSphere";
import { Character } from "../../types/characterTypes";
import styles from "./FactionScreen.module.css";
import { StyledBackButton } from "../../components/StyledBackButton";

export const FactionScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json"
  );
  if (error) {
    navigate("/error");
  } else if (loading) {
    navigate("/loading");
  }
  const isLightSide = state?.isLightSide;

  const filteredCharacters = data?.filter((character: Character) => {
    if (character?.image) {
      return isLightSide
        ? character?.affiliations?.includes("Jedi Order")
        : character?.affiliations?.includes("Sith");
    }
    return false;
  });

  return (
    <>
      {!loading && !error && (
        <section
          className={
            isLightSide ? styles.lightOuterContainer : styles.darkOuterContainer
          }
          aria-label={
            isLightSide ? "Light Side Characters" : "Dark Side Characters"
          }
        >
          <h1
            className={
              isLightSide ? styles.lightFactionEmblem : styles.darkFactionEmblem
            }
            aria-hidden="true"
          >
            {isLightSide ? "$" : "#"}
          </h1>
          <h2 className={styles.title}>
            {isLightSide
              ? "welcome to the resistance"
              : "welcome to the first order"}
          </h2>
          <nav aria-label="Character selection">
            <div className={styles.sphereContainer}>
              {filteredCharacters.map((character: Character) => (
                <Link
                  key={character?.id}
                  className={styles.link}
                  to="/details"
                  state={{ characterData: character, isLightSide }}
                  aria-label={`Details about ${character?.name}`}
                  tabIndex={0}
                >
                  <CharacterSphere
                    characterName={character?.name}
                    characterImage={character?.image}
                    isLightSide={isLightSide}
                  />
                </Link>
              ))}
            </div>
          </nav>
          <StyledBackButton isLight={isLightSide} buttonText="switch sides" />
          <BackgroundParticles isLight={isLightSide} aria-hidden="true" />
        </section>
      )}
    </>
  );
};
