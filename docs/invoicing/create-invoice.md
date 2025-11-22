# Create Invoice

Create professional invoices with line items, taxes, and payment terms.

## Create Invoice

**Endpoint:** `POST /v1/invoices`

**Request Headers:**
```bash
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
Idempotency-Key: unique-key-12345 (optional)
```

**Request Body:**

```json
{
  "customer_id": "cust_1234567890",
  "invoice_number": "INV-2024-001",
  "issue_date": "2024-01-15",
  "due_date": "2024-02-15",
  "currency": "USD",
  "items": [
    {
      "description": "Web Development Services",
      "quantity": 10,
      "unit_price": 150.00,
      "tax_rate": 0.08
    },
    {
      "description": "Hosting Setup",
      "quantity": 1,
      "unit_price": 200.00,
      "tax_rate": 0.08
    }
  ],
  "notes": "Payment due within 30 days",
  "terms": "Net 30",
  "send_email": true
}
```

**Response:** `201 Created`

**Response Headers:**
```
X-Request-ID: req_abc123xyz
X-API-Version: v1
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642248000
Location: https://api.aqnt.net/v1/invoices/inv_1234567890
```

**Response Body:**
```json
{
  "data": {
    "id": "inv_1234567890",
    "invoice_number": "INV-2024-001",
    "customer_id": "cust_1234567890",
    "customer": {
      "id": "cust_1234567890",
      "name": "Acme Corporation",
      "email": "billing@acme.com"
    },
    "status": "sent",
    "issue_date": "2024-01-15",
    "due_date": "2024-02-15",
    "subtotal": 1700.00,
    "tax": 136.00,
    "discount": 0.00,
    "total": 1836.00,
    "amount_paid": 0.00,
    "amount_due": 1836.00,
    "currency": "USD",
    "items": [
      {
        "id": "item_1234567890",
        "description": "Web Development Services",
        "quantity": 10,
        "unit_price": 150.00,
        "subtotal": 1500.00,
        "tax_rate": 0.08,
        "tax": 120.00,
        "total": 1620.00,
        "sku": null
      },
      {
        "id": "item_0987654321",
        "description": "Hosting Setup",
        "quantity": 1,
        "unit_price": 200.00,
        "subtotal": 200.00,
        "tax_rate": 0.08,
        "tax": 16.00,
        "total": 216.00,
        "sku": null
      }
    ],
    "pdf_url": "https://invoices.aqnt.net/inv_1234567890.pdf",
    "payment_terms": "Net 30",
    "notes": "Payment due within 30 days",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "sent_at": "2024-01-15T10:30:05Z"
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
    "send": "https://api.aqnt.net/v1/invoices/inv_1234567890/send",
    "void": "https://api.aqnt.net/v1/invoices/inv_1234567890/void"
  }
}
```

## Invoice Numbering

You can either:
- Let AQNT auto-generate invoice numbers
- Provide your own custom invoice number

If you provide a custom number, ensure it's unique within your account.

## Line Items

Each line item can include:

- `description` (required): Item description
- `quantity` (required): Quantity
- `unit_price` (required): Price per unit
- `tax_rate` (optional): Tax rate (0.08 = 8%)
- `discount` (optional): Discount amount
- `sku` (optional): Product SKU

## Tax Calculation

Taxes can be applied:
- Per line item (using `tax_rate` on each item)
- Globally (using `tax_rate` at invoice level)

```json
{
  "tax_rate": 0.08,
  "items": [...]
}
```

## Discounts

Apply discounts at the invoice or item level:

```json
{
  "discount": {
    "type": "percentage",
    "value": 10
  }
}
```

Or:

```json
{
  "discount": {
    "type": "fixed",
    "value": 50.00
  }
}
```

## Multi-currency

Support for multiple currencies:

```json
{
  "currency": "EUR",
  "items": [...]
}
```

Supported currencies: USD, EUR, GBP, CAD, AUD, and more.

## Email Delivery

Automatically send invoice via email:

```json
{
  "send_email": true,
  "email_subject": "Invoice #INV-2024-001",
  "email_message": "Please find your invoice attached."
}
```

## Error Handling

### Invalid Customer

**Status:** `422 Unprocessable Entity`

```json
{
  "error": {
    "type": "validation_error",
    "code": "INVALID_CUSTOMER",
    "message": "The customer ID provided is invalid or does not exist",
    "details": [
      {
        "field": "customer_id",
        "message": "Customer with ID 'cust_invalid' not found",
        "code": "CUSTOMER_NOT_FOUND",
        "value": "cust_invalid"
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

### Duplicate Invoice Number

**Status:** `409 Conflict`

```json
{
  "error": {
    "type": "resource_conflict",
    "code": "DUPLICATE_INVOICE_NUMBER",
    "message": "An invoice with this number already exists",
    "details": [
      {
        "field": "invoice_number",
        "message": "Invoice number 'INV-2024-001' is already in use",
        "code": "INVOICE_NUMBER_EXISTS",
        "value": "INV-2024-001",
        "existing_resource": "https://api.aqnt.net/v1/invoices/inv_existing123"
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

### Validation Errors

**Status:** `422 Unprocessable Entity`

```json
{
  "error": {
    "type": "validation_error",
    "code": "VALIDATION_FAILED",
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
      },
      {
        "field": "items[0].quantity",
        "message": "Quantity must be a positive integer",
        "code": "QUANTITY_INVALID",
        "value": -5
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

