# SignupResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | Created at timestamp | [default to undefined]
**email** | **string** | Email | [default to undefined]
**emailVerified** | **boolean** | Is email verified? | [default to undefined]
**firstName** | **string** | First name | [default to undefined]
**id** | **string** | User ID | [default to undefined]
**lastName** | **string** | Last name | [default to undefined]
**metaConnected** | **boolean** | Is Meta account connected? | [default to undefined]
**phoneNumber** | **string** | Phone number | [optional] [default to undefined]
**phonePrefix** | **string** | Phone prefix | [optional] [default to undefined]
**shopifyConnected** | **boolean** | Is Shopify account connected? | [default to undefined]

## Example

```typescript
import { SignupResponseDto } from './api';

const instance: SignupResponseDto = {
    createdAt,
    email,
    emailVerified,
    firstName,
    id,
    lastName,
    metaConnected,
    phoneNumber,
    phonePrefix,
    shopifyConnected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
