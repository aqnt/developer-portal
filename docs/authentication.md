# Authentication

AQNT APIs use API key authentication to secure access to your account and resources.

## API Keys

API keys are long-lived credentials that provide full access to your AQNT account. Treat them as sensitive information and never expose them in client-side code or public repositories.

### Creating API Keys

1. Log in to your [AQNT Dashboard](https://aqnt.net/dashboard)
2. Navigate to **Settings** → **API Keys**
3. Click **Create API Key**
4. Give your key a descriptive name (e.g., "Production Server", "Development")
5. Copy the key immediately - you won't be able to see it again

### Using API Keys

Include your API key in the `Authorization` header of every request:

```bash
curl -X GET https://api.aqnt.net/v1/account \
  -H "Authorization: Bearer sk_live_1234567890abcdef"
```

### Key Format

API keys follow this format:

- **Live keys**: `sk_live_...`
- **Test keys**: `sk_test_...`

## OAuth 2.0 (Coming Soon)

We're working on OAuth 2.0 support for more granular access control. Stay tuned for updates!

## Scopes and Permissions

Currently, API keys have full access to your account. In the future, we'll support scoped access for:

- Read-only access
- Specific API endpoints
- Limited resource access

## Security Best Practices

### 1. Use Environment Variables

Never hardcode API keys in your source code:

```javascript
// ❌ Bad
const apiKey = 'sk_live_1234567890abcdef';

// ✅ Good
const apiKey = process.env.AQNT_API_KEY;
```

### 2. Rotate Keys Regularly

- Rotate keys at least every 90 days
- Immediately revoke keys if they're exposed
- Use different keys for different environments (dev, staging, production)

### 3. Restrict Key Access

- Only share keys with team members who need them
- Use secret management tools (AWS Secrets Manager, HashiCorp Vault, etc.)
- Never commit keys to version control

### 4. Monitor Key Usage

Regularly review API key usage in your dashboard to detect unauthorized access.

## Revoking Keys

If a key is compromised or no longer needed:

1. Go to **Settings** → **API Keys**
2. Find the key you want to revoke
3. Click **Revoke**
4. The key will be immediately invalidated

## Error Responses

### Invalid API Key

```json
{
  "error": {
    "type": "authentication_error",
    "message": "Invalid API key provided",
    "code": "invalid_api_key"
  }
}
```

### Missing API Key

```json
{
  "error": {
    "type": "authentication_error",
    "message": "No API key provided",
    "code": "missing_api_key"
  }
}
```

### Expired Key

```json
{
  "error": {
    "type": "authentication_error",
    "message": "API key has been revoked",
    "code": "key_revoked"
  }
}
```

## Testing with Test Keys

Use test keys for development and testing. Test keys work with test data and don't affect your production account.

Test keys are prefixed with `sk_test_` and can be created in the same way as live keys.

