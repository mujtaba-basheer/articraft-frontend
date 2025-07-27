# AuthControllerApi

All URIs are relative to *https://looptrack.up.railway.app*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**signIn**](#signin) | **POST** /api/auth/signin | |
|[**signup**](#signup) | **POST** /api/auth/signup | |

# **signIn**
> SignInResponseDto signIn(signInRequestDto)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    SignInRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let signInRequestDto: SignInRequestDto; //

const { status, data } = await apiInstance.signIn(
    signInRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signInRequestDto** | **SignInRequestDto**|  | |


### Return type

**SignInResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signup**
> SignupResponseDto signup(signupRequestDto)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    SignupRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let signupRequestDto: SignupRequestDto; //

const { status, data } = await apiInstance.signup(
    signupRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signupRequestDto** | **SignupRequestDto**|  | |


### Return type

**SignupResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

