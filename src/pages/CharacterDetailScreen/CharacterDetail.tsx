import { useLocation } from "react-router-dom";
import { CharacterSphere } from "../../components/CharacterSphere";
import { BackgroundParticles } from "../../components/BackgroundParticles";
import styles from "./CharacterDetail.module.css";
import { StyledBackButton } from "../../components/StyledBackButton";

const renderListItem = (
  label: string,
  value: string | string[],
  isList: boolean,
  isLight: boolean
) => {
  if (!value) {
    return null;
  }

  const renderValue = (val: string) => (isList ? val.toLocaleLowerCase() : val);

  const formattedLabel = isLight ? `$ ${label}` : `# ${label}`;

  return (
    <li aria-label={label}>
      {formattedLabel}:
      {Array.isArray(value) ? (
        <ul>
          {value.map((item: string, index: number) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      ) : (
        renderValue(value)
      )}
    </li>
  );
};

export const CharacterDetail = () => {
  const { state } = useLocation();
  const { characterData, isLightSide } = state;
  const { name, homeworld, height, species, image, affiliations } =
    characterData;

  return (
    <>
      <div className={styles.outerContainer} tabIndex={0}>
        <div
          className={`${styles.innerContainer} ${
            isLightSide ? styles.lightInnerContainer : styles.darkInnerContainer
          }`}
        >
          <CharacterSphere
            characterName={name}
            characterImage={image}
            isLightSide={isLightSide}
          />
          <div className={styles.listContainer}>
            <ul className={styles.outerUl}>
              {renderListItem("homeworld", homeworld, true, isLightSide)}
              {renderListItem("species", species, true, isLightSide)}
              {renderListItem("height", height, false, isLightSide)}
              {renderListItem("affiliations", affiliations, true, isLightSide)}
            </ul>
          </div>
          <StyledBackButton buttonText={"go back"} isLight={isLightSide} />
        </div>
        <BackgroundParticles isLight={isLightSide} aria-hidden={true} />
      </div>
    </>
  );
};
