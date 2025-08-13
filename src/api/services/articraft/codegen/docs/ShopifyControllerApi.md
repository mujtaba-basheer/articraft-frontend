# ShopifyControllerApi

All URIs are relative to *https://api.articraft.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authCheck**](#authcheck) | **GET** /api/shopify/check | |
|[**beginAuth**](#beginauth) | **GET** /api/shopify/auth | |
|[**handleRedirect**](#handleredirect) | **GET** /api/shopify/redirect | |

# **authCheck**
> authCheck()


### Example

```typescript
import {
    ShopifyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShopifyControllerApi(configuration);

const { status, data } = await apiInstance.authCheck();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beginAuth**
> beginAuth()


### Example

```typescript
import {
    ShopifyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShopifyControllerApi(configuration);

let store: string; //Store slug (default to undefined)

const { status, data } = await apiInstance.beginAuth(
    store
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **store** | [**string**] | Store slug | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **handleRedirect**
> handleRedirect()


### Example

```typescript
import {
    ShopifyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShopifyControllerApi(configuration);

const { status, data } = await apiInstance.handleRedirect();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

