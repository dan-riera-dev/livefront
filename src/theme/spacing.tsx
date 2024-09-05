export const spacing = {
  level0: 0,
  level1: 4,
  level2: 8,
  level3: 10,
  level4: 12,
  level5: 16,
  level6: 20,
  level7: 24,
  level8: 36,
} as const;

export type Spacing = keyof typeof spacing;
