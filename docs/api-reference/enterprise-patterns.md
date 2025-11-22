# Enterprise API Patterns

This document outlines the enterprise-grade patterns used throughout the AQNT API to ensure consistency, reliability, and excellent developer experience.

## Response Structure

All API responses follow a standardized structure:

### Single Resource Response

HTTP status codes (2xx) indicate success. The `success` field is optional:

```json
{
  "data": {
    // Resource data
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/resource/id",
    "related_resources": {
      "customer": "https://api.aqnt.net/v1/customers/cust_123",
      "payments": "https://api.aqnt.net/v1/invoices/inv_123/payments",
      "pdf": "https://invoices.aqnt.net/inv_123.pdf"
    }
  }
}
```

**Note:** Some APIs include `"success": true` for consistency, but it's redundant with HTTP status codes.

#### Example: Invoice Response with Related Resources

```json
{
  "data": {
    "id": "inv_1234567890",
    "invoice_number": "INV-2024-001",
    "customer_id": "cust_1234567890",
    "status": "paid",
    "total": 1836.00
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/invoices/inv_1234567890",
    "customer": "https://api.aqnt.net/v1/customers/cust_1234567890",
    "payments": "https://api.aqnt.net/v1/invoices/inv_1234567890/payments",
    "pdf": "https://invoices.aqnt.net/inv_1234567890.pdf",
    "estimate": "https://api.aqnt.net/v1/estimates/est_1234567890"
  }
}
```

#### Example: Payment Response with Related Resources

```json
{
  "data": {
    "id": "pay_1234567890",
    "amount": 100.00,
    "status": "succeeded",
    "invoice_id": "inv_1234567890"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/payments/pay_1234567890",
    "invoice": "https://api.aqnt.net/v1/invoices/inv_1234567890",
    "customer": "https://api.aqnt.net/v1/customers/cust_1234567890",
    "payment_method": "https://api.aqnt.net/v1/payments/payment-methods/pm_1234567890",
    "receipt": "https://receipts.aqnt.net/pay_1234567890",
    "refund": "https://api.aqnt.net/v1/payments/pay_1234567890/refunds"
  }
}
```

#### Example: Expense Response with Related Resources

```json
{
  "data": {
    "id": "exp_1234567890",
    "amount": 45.50,
    "category": "Travel",
    "employee_id": "emp_1234567890",
    "claim_id": "claim_1234567890"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/expenses/exp_1234567890",
    "employee": "https://api.aqnt.net/v1/payroll/employees/emp_1234567890",
    "claim": "https://api.aqnt.net/v1/expenses/claims/claim_1234567890",
    "receipt": "https://api.aqnt.net/v1/expenses/receipts/receipt_1234567890",
    "project": "https://api.aqnt.net/v1/projects/proj_1234567890"
  }
}
```

#### Example: Purchase Order Response with Related Resources

```json
{
  "data": {
    "id": "po_1234567890",
    "po_number": "PO-2024-001",
    "vendor_id": "vend_1234567890",
    "status": "approved"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/purchase-orders/po_1234567890",
    "vendor": "https://api.aqnt.net/v1/purchase-orders/vendors/vend_1234567890",
    "items": "https://api.aqnt.net/v1/purchase-orders/po_1234567890/items",
    "receiving": "https://api.aqnt.net/v1/purchase-orders/po_1234567890/receiving",
    "invoice": "https://api.aqnt.net/v1/bills/bill_1234567890",
    "pdf": "https://purchase-orders.aqnt.net/po_1234567890.pdf"
  }
}
```

#### Example: Employee Response with Related Resources

```json
{
  "data": {
    "id": "emp_1234567890",
    "employee_id": "EMP-001",
    "name": "John Doe",
    "department_id": "dept_1234567890"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/payroll/employees/emp_1234567890",
    "pay_runs": "https://api.aqnt.net/v1/payroll/pay-runs?employee_id=emp_1234567890",
    "expenses": "https://api.aqnt.net/v1/expenses?employee_id=emp_1234567890",
    "department": "https://api.aqnt.net/v1/departments/dept_1234567890",
    "w2_forms": "https://api.aqnt.net/v1/payroll/tax-forms/w2?employee_id=emp_1234567890"
  }
}
```

### Collection Response

```json
{
  "data": [
    // Array of resources
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
    "self": "https://api.aqnt.net/v1/resource?page=1",
    "first": "https://api.aqnt.net/v1/resource?page=1",
    "last": "https://api.aqnt.net/v1/resource?page=8",
    "next": "https://api.aqnt.net/v1/resource?page=2",
    "prev": null
  }
}
```

### Error Response

For error responses (4xx, 5xx), omit the `success` field - HTTP status code indicates failure:

```json
{
  "error": {
    "type": "error_type",
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": [
      {
        "field": "field_name",
        "message": "Field-specific error message",
        "code": "FIELD_ERROR_CODE",
        "value": "invalid_value"
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

## RESTful Endpoint Patterns

### Resource Naming

- Use nouns, not verbs: `/v1/invoices` not `/v1/create_invoice`
- Use plural nouns: `/v1/invoices` not `/v1/invoice`
- Use lowercase with hyphens: `/v1/purchase-orders` not `/v1/purchaseOrders`

### Nested Resources

Related resources are nested logically:

```
GET    /v1/invoices/{id}/payments           # List payments
POST   /v1/invoices/{id}/payments           # Create payment
GET    /v1/invoices/{id}/payments/{pay_id}  # Get payment
DELETE /v1/invoices/{id}/payments/{pay_id}  # Delete payment
```

### Actions on Resources

For actions that don't fit standard CRUD, use POST with action in the path:

```
POST /v1/invoices/{id}/send        # Send invoice
POST /v1/invoices/{id}/void        # Void invoice
POST /v1/payments/{id}/refund      # Refund payment
POST /v1/expenses/{id}/approve     # Approve expense
```

## HTTP Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PATCH, PUT |
| 201 | Created | Successful POST (resource created) |
| 202 | Accepted | Request accepted, processing async |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Malformed request |
| 401 | Unauthorized | Missing/invalid auth |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Resource conflict |
| 422 | Unprocessable Entity | Validation errors |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |
| 503 | Service Unavailable | Service unavailable |

## Response Headers

All responses include standard headers:

```
X-Request-ID: req_abc123xyz          # Unique request identifier
X-API-Version: v1                     # API version
X-RateLimit-Limit: 1000               # Rate limit
X-RateLimit-Remaining: 999            # Remaining requests
X-RateLimit-Reset: 1642248000         # Reset timestamp
X-Response-Time: 45ms                 # Response time
Content-Type: application/json        # Content type
Location: https://api.aqnt.net/...    # For 201 Created
```

## Pagination

Use `page` and `per_page` parameters:

```
GET /v1/invoices?page=1&per_page=20
```

Response includes pagination metadata and navigation links.

## Filtering

Use query parameters with filter operators:

```
GET /v1/invoices?filter[status][eq]=paid
GET /v1/invoices?filter[amount][gte]=100&filter[amount][lte]=1000
GET /v1/invoices?filter[due_date][gte]=2024-01-01
```

## Sorting

Use `sort` and `order` parameters:

```
GET /v1/invoices?sort=created_at&order=desc
GET /v1/invoices?sort=amount,created_at&order=desc,asc
```

## Field Selection

Request specific fields:

```
GET /v1/invoices?fields=id,invoice_number,amount,status
```

## Idempotency

POST requests support idempotency:

```
POST /v1/invoices
Idempotency-Key: unique-key-12345
```

Duplicate requests with the same key return the original response.

## Request IDs

Every request generates a unique ID:
- Included in response body (`meta.request_id`)
- Included in response header (`X-Request-ID`)
- Included in error responses

Use for support and debugging.

## Versioning

API versioning via URL:

```
https://api.aqnt.net/v1/invoices
https://api.aqnt.net/v2/invoices
```

Version also in response headers and metadata.

## Best Practices

1. **Use HTTP status codes** as the primary indicator of success/failure
2. **Check status codes** (2xx = success, 4xx/5xx = error) before accessing `data`
3. **Use `request_id`** for support requests and debugging
4. **Follow pagination links** instead of constructing URLs manually
5. **Handle errors gracefully** using error details and status codes
6. **Use idempotency keys** for critical operations
7. **Respect rate limits** using response headers
8. **Cache resources** using ETags when available
9. **Use field selection** to reduce payload size
10. **Don't rely on `success` field** - it's optional and HTTP status codes are authoritative

