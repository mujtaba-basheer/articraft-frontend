# ShopifyControllerApi

All URIs are relative to *https://api.articraft.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**auth**](#auth) | **GET** /api/shopify/auth | |
|[**authCheck**](#authcheck) | **GET** /api/shopify/check | |
|[**handleRedirect**](#handleredirect) | **GET** /api/shopify/redirect | |

# **auth**
> ShopifyAuthResponseDto auth()


### Example

```typescript
import {
    ShopifyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShopifyControllerApi(configuration);

let store: string; //Store slug (default to undefined)

const { status, data } = await apiInstance.auth(
    store
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **store** | [**string**] | Store slug | defaults to undefined|


### Return type

**ShopifyAuthResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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

