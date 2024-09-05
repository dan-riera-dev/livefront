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

export const innerContainer = {
  width: "40vw",
  justifyContent: "center",
  alignItems: "center",
};

export const title: CSSProperties = {
  color: colors.primaryText,
  textAlign: "center",
  fontFamily: "Jhol",
};

export const subheader = {
  color: colors.secondaryText,
  fontFamily: "Jedi",
  fontSize: "3em",
};

export const subheaderContainer = {
  display: "flex",
  justifyContent: "space-around",
};
