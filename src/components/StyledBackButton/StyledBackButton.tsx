import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StyledBackButton.module.css";

interface StyledBackButtonProps {
  buttonText: string;
  isLight: boolean;
}

export const StyledBackButton: FC<StyledBackButtonProps> = ({
  buttonText,
  isLight,
}) => {
  const navigate = useNavigate();
  const buttonClass =
    isLight === undefined
      ? styles.button
      : isLight
      ? `${styles.button} ${styles.lightButton}`
      : `${styles.button} ${styles.darkButton}`;

  return (
    <button
      onClick={() => navigate(-1)}
      className={buttonClass}
      aria-label={buttonText}
    >
      {buttonText}
    </button>
  );
};
