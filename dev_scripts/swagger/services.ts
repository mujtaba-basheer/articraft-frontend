export const services = ["articraft"] as const;
export type ApiService = (typeof services)[number];
