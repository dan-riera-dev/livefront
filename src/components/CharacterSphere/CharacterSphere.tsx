import { FC, useEffect, useState } from "react";
import styles from "./CharacterSphere.module.css";
import defaultImage from "../../assets/images/errorImage.png";

type CharacterSphereProps = {
  characterName: string;
  characterImage: string;
  isLightSide: boolean;
};

export const CharacterSphere: FC<CharacterSphereProps> = ({
  characterName,
  characterImage,
  isLightSide,
}) => {
  const [imageSrc, setImageSrc] = useState(characterImage);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(characterImage);
        if (!response?.ok) {
          setImageSrc(defaultImage);
        }
      } catch (error) {
        setImageSrc(defaultImage);
      }
    };

    checkImage();
  }, [characterImage]);

  return (
    <div
      className={styles.innerContainer}
      role="group"
      tabIndex={0}
      aria-label={`Image of ${characterName}, aligned with the ${
        isLightSide ? "Light Side" : "Dark Side"
      }`}
    >
      <img
        className={`${styles.sphereContainer} ${
          isLightSide ? styles.lightSphereContainer : styles.darkSphereContainer
        }`}
        src={imageSrc}
        alt={`Portrait of ${characterName}`}
        aria-hidden={false}
        loading="eager"
      />
      <h2
        className={styles.sphereText}
        aria-label={`Character name: ${characterName}`}
      >
        {characterName.toLowerCase()}
      </h2>
    </div>
  );
};
