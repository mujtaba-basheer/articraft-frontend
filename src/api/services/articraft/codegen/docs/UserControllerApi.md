# UserControllerApi

All URIs are relative to *https://api.articraft.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteUserById**](#deleteuserbyid) | **DELETE** /api/user/{userId} | |

# **deleteUserById**
> deleteUserById()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUserById(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

