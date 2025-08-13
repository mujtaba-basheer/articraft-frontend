import { AuthControllerApi, ShopifyControllerApi } from "./codegen/api";
import { Configuration } from "./codegen/configuration";

// Token Management
const getAccessToken = (): string => {
  return localStorage.getItem('looptrack_access_token') || '';
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem('looptrack_access_token', token);
};

export const clearAccessToken = (): void => {
  localStorage.removeItem('looptrack_access_token');
};

// API Configuration
const configuration = new Configuration({
  accessToken: getAccessToken,
});

// API Controllers
export const authController = new AuthControllerApi(configuration);
export const shopifyController = new ShopifyControllerApi(configuration);

// Direct Shopify OAuth (bypassing backend CORS issues)
export const connectShopify = async (shopDomain: string): Promise<void> => {
  // For now, just redirect directly to simulate the connection
  // In a real app, you would get these values from your Shopify app settings
  const clientId = 'your-shopify-client-id'; // Replace with actual client ID
  const redirectUri = `${window.location.origin}/auth/shopify/callback`;
  const scopes = 'read_products,read_orders';
  
  // Build Shopify OAuth URL
  const authUrl = `https://${shopDomain}.myshopify.com/admin/oauth/authorize?` +
    `client_id=${clientId}&` +
    `scope=${scopes}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `state=${Date.now()}`;
  
  // Redirect to Shopify
  window.location.href = authUrl;
};

// Simple connection check (mock for now)
export const checkShopifyConnection = async (): Promise<boolean> => {
  // Check if we have a stored connection
  return localStorage.getItem('shopify_connected') === 'true';
};

// Helper to check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getAccessToken();
};

// Helper to mark Shopify as connected (call this after successful OAuth)
export const markShopifyConnected = (): void => {
  localStorage.setItem('shopify_connected', 'true');
};