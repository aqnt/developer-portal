# API Reference

Welcome to the AQNT API Reference. This document provides an overview of all available APIs and endpoints.

AQNT APIs follow RESTful principles and enterprise-grade standards. See [RESTful Standards](/api-reference/restful-standards) for detailed information about response structures, error handling, and best practices.

## Base URL

All API requests should be made to:

```
https://api.aqnt.net/v1
```

## RESTful Design

AQNT APIs are designed following RESTful principles:

- **Resource-based URLs**: Use nouns, not verbs (e.g., `/v1/invoices`, not `/v1/create_invoice`)
- **HTTP Methods**: Use appropriate HTTP methods (GET, POST, PATCH, PUT, DELETE)
- **Nested Resources**: Related resources are nested (e.g., `/v1/invoices/{id}/payments`)
- **Standard Status Codes**: Proper HTTP status codes for all responses
- **Consistent Structure**: All responses follow the same enterprise structure

See [RESTful Standards](/api-reference/restful-standards) for complete details.

## API Versioning

The current API version is **v1**. We maintain backward compatibility within major versions. When we release breaking changes, we'll introduce a new version.

## Request Format

### Headers

All requests must include:

```bash
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

Optional headers:

```bash
Idempotency-Key: unique-key-12345  # For idempotent POST requests
X-Request-ID: req_custom_id         # Custom request ID for tracking
```

### Request Body

For POST, PUT, and PATCH requests, send JSON in the request body:

```json
{
  "name": "Example",
  "amount": 100.00
}
```

## Response Format

All responses follow a consistent enterprise structure. See [RESTful Standards](/api-reference/restful-standards) for complete details.

### Success Response

HTTP status codes (2xx) indicate success. The `success` field is optional:

```json
{
  "data": {
    "id": "obj_1234567890",
    "name": "Example",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/resource/obj_1234567890",
    "related_resources": {
      "customer": "https://api.aqnt.net/v1/customers/cust_123",
      "payments": "https://api.aqnt.net/v1/resource/obj_1234567890/payments",
      "pdf": "https://documents.aqnt.net/obj_1234567890.pdf"
    }
  }
}
```

### Error Response

For error responses (4xx, 5xx), the HTTP status code indicates failure. The `success` field is omitted:

```json
{
  "error": {
    "type": "validation_error",
    "code": "INVALID_REQUEST",
    "message": "The request contains invalid parameters",
    "details": [
      {
        "field": "amount",
        "message": "Amount must be a positive number",
        "code": "AMOUNT_INVALID",
        "value": -100.00
      }
    ],
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  }
}
```

## HTTP Status Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request - Invalid parameters |
| 401  | Unauthorized - Invalid or missing API key |
| 403  | Forbidden - Insufficient permissions |
| 404  | Not Found - Resource doesn't exist |
| 429  | Too Many Requests - Rate limit exceeded |
| 500  | Internal Server Error |
| 503  | Service Unavailable |

## Pagination

List endpoints support pagination using `page` and `per_page` parameters:

```
GET /v1/invoices?page=1&per_page=20
```

Response includes pagination metadata and navigation links:

```json
{
  "success": true,
  "data": [...],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 20,
      "total": 150,
      "total_pages": 8,
      "has_next": true,
      "has_previous": false
    }
  },
  "links": {
    "self": "https://api.aqnt.net/v1/invoices?page=1&per_page=20",
    "first": "https://api.aqnt.net/v1/invoices?page=1&per_page=20",
    "last": "https://api.aqnt.net/v1/invoices?page=8&per_page=20",
    "next": "https://api.aqnt.net/v1/invoices?page=2&per_page=20",
    "prev": null
  }
}
```

## Filtering and Sorting

Many list endpoints support advanced filtering and sorting:

```
GET /v1/invoices?status=paid&sort=created_at&order=desc&filter[amount][gte]=100
```

### Filter Operators

- `eq`: Equal
- `ne`: Not equal
- `gt`: Greater than
- `gte`: Greater than or equal
- `lt`: Less than
- `lte`: Less than or equal
- `in`: In array
- `like`: Pattern match

### Sorting

```
GET /v1/invoices?sort=created_at&order=desc
GET /v1/invoices?sort=amount,created_at&order=desc,asc
```

## Webhooks

Subscribe to webhooks to receive real-time notifications about events in your account. See the [Webhooks documentation](/integrations/webhooks) for details.

## Available APIs

### Point of Sale (POS)

Manage sales transactions, inventory, and payments.

- [POS Overview](/pos/overview)
- [Transactions](/pos/transactions)
- [Inventory](/pos/inventory)
- [Payments](/pos/payments)

### Invoicing

Create, manage, and track invoices.

- [Invoicing Overview](/invoicing/overview)
- [Create Invoice](/invoicing/create-invoice)
- [Invoice Management](/invoicing/manage-invoices)
- [Payment Tracking](/invoicing/payments)

### Estimates

Generate and manage project estimates.

- [Estimates Overview](/estimates/overview)
- [Create Estimate](/estimates/create-estimate)
- [Convert to Invoice](/estimates/convert-to-invoice)

### Payroll

Process payroll, manage employees, and handle compliance.

- [Payroll Overview](/payroll/overview)
- [Employees](/payroll/employees)
- [Pay Runs](/payroll/pay-runs)
- [Tax Compliance](/payroll/tax-compliance)

### Personal Finance

AI-powered personal finance management and insights.

- [Personal Finance Overview](/personal-finance/overview)
- [Accounts](/personal-finance/accounts)
- [Transactions](/personal-finance/transactions)
- [Budgeting](/personal-finance/budgeting)
- [AI Insights](/personal-finance/ai-insights)

## Rate Limits

Rate limits vary by plan. See [Getting Started](/getting-started#rate-limits) for details.

## SDKs and Libraries

Official SDKs are available for popular languages:

- JavaScript/TypeScript: `npm install @aqnt/sdk`
- Python: `pip install aqnt`
- Ruby: `gem install aqnt`
- PHP: `composer require aqnt/aqnt-php`

## Support

- 📧 Email: developers@aqnt.net
- 💬 Support Portal: [aqnt.net/support](https://aqnt.net/support)

