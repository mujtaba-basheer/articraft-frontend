import { AuthControllerApi, ShopifyControllerApi } from "./codegen/api";
import { Configuration } from "./codegen/configuration";

// Token Management
const getAccessToken = (): string => {
  console.log("in: getAccessToken()");
  return localStorage.getItem("looptrack_access_token") || "";
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem("looptrack_access_token", token);
};

export const clearAccessToken = (): void => {
  localStorage.removeItem("looptrack_access_token");
};

// API Configuration
const configuration = new Configuration({
  accessToken: getAccessToken,
});

// API Controllers
export const authController = new AuthControllerApi();
export const shopifyController = new ShopifyControllerApi(configuration);

// Simple connection check (mock for now)
export const checkShopifyConnection = async (): Promise<boolean> => {
  // Check if we have a stored connection
  return localStorage.getItem("shopify_connected") === "true";
};

// Helper to check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getAccessToken();
};

// Helper to mark Shopify as connected (call this after successful OAuth)
export const markShopifyConnected = (): void => {
  localStorage.setItem("shopify_connected", "true");
};
