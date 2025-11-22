# OAuth Integration

The OAuth API allows you to integrate AQNT with OAuth providers for secure authentication and authorization.

## Overview

OAuth integration enables your application to:
- Authenticate users via OAuth providers
- Access user data with proper permissions
- Maintain secure token management
- Refresh access tokens automatically

## Base Endpoint

```
https://api.aqnt.net/v1/integrations/oauth
```

## OAuth Flow

### 1. Authorization Request

Redirect users to the authorization URL:

```
https://api.aqnt.net/v1/integrations/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=read write
```

### 2. Handle Callback

After user authorization, you'll receive an authorization code in the callback URL:

```
YOUR_REDIRECT_URI?code=AUTHORIZATION_CODE
```

### 3. Exchange Code for Tokens

Exchange the authorization code for access and refresh tokens:

```bash
curl -X POST https://api.aqnt.net/v1/integrations/oauth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "authorization_code",
    "code": "AUTHORIZATION_CODE",
    "redirect_uri": "YOUR_REDIRECT_URI",
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET"
  }'
```

Response:

```json
{
  "data": {
    "access_token": "access_token_here",
    "refresh_token": "refresh_token_here",
    "token_type": "Bearer",
    "expires_in": 3600,
    "scope": "read write"
  }
}
```

## Refresh Tokens

Refresh an expired access token:

```bash
curl -X POST https://api.aqnt.net/v1/integrations/oauth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "refresh_token",
    "refresh_token": "REFRESH_TOKEN",
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET"
  }'
```

## Revoke Tokens

Revoke an access or refresh token:

```bash
curl -X POST https://api.aqnt.net/v1/integrations/oauth/revoke \
  -H "Content-Type: application/json" \
  -d '{
    "token": "TOKEN_TO_REVOKE",
    "token_type_hint": "access_token"
  }'
```

## Scopes

Available OAuth scopes:

- `read`: Read access to resources
- `write`: Write access to resources
- `admin`: Administrative access
- `invoicing`: Access to invoicing APIs
- `payments`: Access to payment APIs
- `reporting`: Access to reporting APIs

## Security Best Practices

1. **Store tokens securely**: Never expose tokens in client-side code
2. **Use HTTPS**: Always use HTTPS for OAuth endpoints
3. **Validate redirect URIs**: Ensure redirect URIs match registered URIs
4. **Token expiration**: Handle token expiration gracefully
5. **Refresh tokens**: Use refresh tokens to obtain new access tokens

## Error Handling

OAuth errors follow standard OAuth 2.0 error format:

```json
{
  "error": {
    "type": "oauth_error",
    "code": "invalid_grant",
    "message": "The authorization code is invalid or expired",
    "error_description": "The authorization code provided has expired"
  }
}
```

Common error codes:

- `invalid_request`: Invalid request parameters
- `invalid_client`: Invalid client credentials
- `invalid_grant`: Invalid authorization code or refresh token
- `unauthorized_client`: Client not authorized for this grant type
- `unsupported_grant_type`: Grant type not supported
- `invalid_scope`: Invalid or unauthorized scope

## Next Steps

- [Webhooks](/integrations/webhooks) - Set up webhooks
- [Event Subscriptions](/integrations/events) - Subscribe to events

