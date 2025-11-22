# Getting Started

Welcome to the AQNT Developer Portal! This guide will help you get started with integrating AQNT's AI-powered accounting platform APIs into your application.

## What is AQNT?

AQNT is an AI-powered accounting platform that provides comprehensive solutions for:

- **Point of Sale (POS)**: Complete retail and restaurant POS systems
- **Invoicing**: Professional invoice generation and management
- **Estimates**: Create and manage project estimates
- **Payroll**: Automated payroll processing and compliance
- **Personal Finance**: AI-driven personal finance management

## Quick Start

### 1. Create an Account

First, sign up for an AQNT account at [aqnt.net](https://aqnt.net) if you haven't already.

### 2. Get Your API Keys

1. Log in to your AQNT dashboard
2. Navigate to **Settings** → **API Keys**
3. Generate a new API key
4. Copy and securely store your API key (you won't be able to see it again)

:::warning Security Best Practice
Never commit your API keys to version control. Use environment variables or secure secret management systems.
:::

### 3. Make Your First API Call

Let's verify your API key by making a simple request to check your account status:

```bash
curl -X GET https://api.aqnt.net/v1/account \
  -H "Authorization: Bearer YOUR_API_KEY"
```

If successful, you'll receive a response with your account information:

```json
{
  "account_id": "acc_1234567890",
  "name": "Your Company Name",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z"
}
```

## Base URL

All API requests should be made to:

```
https://api.aqnt.net/v1
```

## Authentication

AQNT uses API key authentication. Include your API key in the `Authorization` header of every request:

```
Authorization: Bearer YOUR_API_KEY
```

For detailed authentication information, see the [Authentication Guide](/authentication).

## Rate Limits

API rate limits are applied per API key:

- **Standard Plan**: 1,000 requests per hour
- **Professional Plan**: 10,000 requests per hour
- **Enterprise Plan**: Custom limits

Rate limit information is included in response headers:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642248000
```

## Next Steps

- Learn about [Authentication](/authentication)
- Explore the [API Reference](/api-reference)
- Check out specific API documentation:
  - [POS API](/pos/overview)
  - [Invoicing API](/invoicing/overview)
  - [Estimates API](/estimates/overview)
  - [Payroll API](/payroll/overview)
  - [Personal Finance API](/personal-finance/overview)

## Support

Need help? We're here for you:

- 📧 Email: developers@aqnt.net
- 💬 Support Portal: [aqnt.net/support](https://aqnt.net/support)
- 📚 Documentation: This portal

