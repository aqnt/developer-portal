# RESTful API Standards

AQNT APIs follow RESTful principles and enterprise-grade standards for consistency, reliability, and developer experience.

## RESTful Principles

### Resource Naming

Resources are named using nouns (not verbs) and follow a hierarchical structure:

```
GET    /v1/invoices              # List resources
GET    /v1/invoices/{id}         # Get single resource
POST   /v1/invoices              # Create resource
PATCH  /v1/invoices/{id}          # Update resource (partial)
PUT    /v1/invoices/{id}         # Update resource (full)
DELETE /v1/invoices/{id}         # Delete resource
```

### Nested Resources

Related resources are nested logically:

```
GET    /v1/invoices/{id}/payments           # List payments for invoice
POST   /v1/invoices/{id}/payments           # Create payment for invoice
GET    /v1/invoices/{id}/payments/{pay_id}  # Get specific payment
```

### HTTP Methods

| Method | Usage | Idempotent | Safe |
|--------|-------|------------|------|
| GET | Retrieve resources | Yes | Yes |
| POST | Create resources | No | No |
| PATCH | Partial update | No | No |
| PUT | Full update/replace | Yes | No |
| DELETE | Delete resources | Yes | No |

### HTTP Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PATCH, PUT |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Missing/invalid authentication |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Resource conflict (e.g., duplicate) |
| 422 | Unprocessable Entity | Validation errors |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |
| 503 | Service Unavailable | Service temporarily unavailable |

## Enterprise Response Structure

All API responses follow a consistent enterprise-grade structure. **HTTP status codes are the primary indicator of success/failure** - the `success` field is optional and can be omitted for cleaner responses.

### Success Response

HTTP status codes (2xx) indicate success:

```json
{
  "data": {
    "id": "inv_1234567890",
    "invoice_number": "INV-2024-001",
    "status": "paid",
    "amount": 1000.00,
    "currency": "USD"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/invoices/inv_1234567890"
  }
}
```

**Note:** Some APIs include `"success": true` for consistency, but it's redundant with HTTP status codes.

### List Response

```json
{
  "data": [
    {
      "id": "inv_1234567890",
      "invoice_number": "INV-2024-001",
      "status": "paid"
    },
    {
      "id": "inv_0987654321",
      "invoice_number": "INV-2024-002",
      "status": "pending"
    }
  ],
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1",
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
    "self": "https://api.aqnt.net/v1/invoices?page=1",
    "first": "https://api.aqnt.net/v1/invoices?page=1",
    "last": "https://api.aqnt.net/v1/invoices?page=8",
    "next": "https://api.aqnt.net/v1/invoices?page=2",
    "prev": null
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
        "message": "Amount must be greater than 0",
        "code": "AMOUNT_INVALID",
        "value": -100.00
      },
      {
        "field": "due_date",
        "message": "Due date must be in the future",
        "code": "DATE_INVALID",
        "value": "2023-01-01"
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

## Response Headers

All responses include standard enterprise headers:

```
X-Request-ID: req_abc123xyz
X-API-Version: v1
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642248000
X-Response-Time: 45ms
Content-Type: application/json
```

## Pagination

Pagination uses query parameters:

```
GET /v1/invoices?page=1&per_page=20
```

Response includes pagination metadata and links:

```json
{
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
    "self": "https://api.aqnt.net/v1/invoices?page=1",
    "first": "https://api.aqnt.net/v1/invoices?page=1",
    "last": "https://api.aqnt.net/v1/invoices?page=8",
    "next": "https://api.aqnt.net/v1/invoices?page=2",
    "prev": null
  }
}
```

## Filtering & Sorting

Use query parameters for filtering and sorting:

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

## Field Selection

Request specific fields using the `fields` parameter:

```
GET /v1/invoices?fields=id,invoice_number,amount,status
```

## Request IDs

Every request generates a unique request ID returned in:
- Response body (`meta.request_id`)
- Response header (`X-Request-ID`)

Use request IDs for support and debugging.

## Versioning

API versioning via URL path:

```
https://api.aqnt.net/v1/invoices
https://api.aqnt.net/v2/invoices
```

Version also included in response headers and metadata.

## Rate Limiting

Rate limit information in response headers:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642248000
```

When rate limit exceeded:

```json
{
  "success": false,
  "error": {
    "type": "rate_limit_error",
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Please retry after 2024-01-15T11:00:00Z",
    "retry_after": 3600
  }
}
```

## Idempotency

POST requests support idempotency using `Idempotency-Key` header:

```
POST /v1/invoices
Idempotency-Key: unique-key-12345
```

Duplicate requests with the same key return the original response.

## Webhooks

Webhook events follow the same response structure:

```json
{
  "event": "invoice.paid",
  "data": {
    "id": "inv_1234567890",
    "invoice_number": "INV-2024-001",
    "status": "paid"
  },
  "meta": {
    "event_id": "evt_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  }
}
```

