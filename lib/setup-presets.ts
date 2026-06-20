export const setupStyles = ["esport", "streamer", "RGB", "minimaliste", "ultra premium"] as const;
export const setupNeeds = ["FPS", "MMO", "streaming", "montage", "console", "PC"] as const;

export type SetupStyle = typeof setupStyles[number];
export type SetupNeed = typeof setupNeeds[number];
