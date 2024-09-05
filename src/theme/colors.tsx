const palette = {
  background: "#0b0b0b",
  primaryText: "#ffffff",
  secondaryText: "#bbbbbb",
} as const;

export const colors = {
  /**
   * Default text color.
   */
  primaryText: palette.primaryText,
  /**
   * Secondary text color.
   */
  secondaryText: palette.secondaryText,
  /**
   * The screen background.
   */
  background: palette.background,
};
