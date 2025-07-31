export const services = ["loop-track"] as const;
export type ApiService = (typeof services)[number];
