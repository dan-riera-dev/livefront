import { CSSProperties } from "react";
import { colors } from "../../theme";

export const outterContainer = {
  display: "flex",
  backgroundColor: colors.background,
  height: "100vh",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center",
};

export const innerContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "40vw",
  justifyContent: "center",
  alignItems: "center",
};

export const title: CSSProperties = {
  color: colors.primaryText,
  textAlign: "center",
  fontFamily: "Jhol",
};

export const subHeader: CSSProperties = {
  color: colors.secondaryText,
  textAlign: "center",
  fontFamily: "Jedi",
};
export const imageStyle = {
  maxWidth: "15vw",
  alignSelf: "center",
};
