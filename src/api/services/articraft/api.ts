import { AuthControllerApi, ShopifyControllerApi } from "./codegen/api";
import { Configuration } from "./codegen/configuration";

const configuration = new Configuration({
  accessToken: () => {
    // Logic to get accessToken goes here
    // This function returns a string
    return "";
  },
});

export const authController = new AuthControllerApi();

export const shopifyController = new ShopifyControllerApi(configuration);
