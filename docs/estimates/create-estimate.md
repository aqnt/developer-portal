# Create Estimate

Create professional project estimates with line items and pricing.

## Create Estimate

**Endpoint:** `POST /v1/estimates`

**Request Body:**

```json
{
  "customer_id": "cust_1234567890",
  "estimate_number": "EST-2024-001",
  "issue_date": "2024-01-15",
  "valid_until": "2024-02-15",
  "currency": "USD",
  "items": [
    {
      "description": "Website Development",
      "quantity": 1,
      "unit_price": 5000.00,
      "tax_rate": 0.08
    },
    {
      "description": "Hosting Setup (Annual)",
      "quantity": 1,
      "unit_price": 1200.00,
      "tax_rate": 0.08
    }
  ],
  "notes": "This estimate is valid for 30 days",
  "terms": "Payment terms: 50% upfront, 50% on completion",
  "send_email": true
}
```

**Response:**

```json
{
  "data": {
    "id": "est_1234567890",
    "estimate_number": "EST-2024-001",
    "customer_id": "cust_1234567890",
    "status": "sent",
    "issue_date": "2024-01-15",
    "valid_until": "2024-02-15",
    "subtotal": 6200.00,
    "tax": 496.00,
    "total": 6696.00,
    "currency": "USD",
    "items": [
      {
        "description": "Website Development",
        "quantity": 1,
        "unit_price": 5000.00,
        "total": 5000.00,
        "tax": 400.00
      },
      {
        "description": "Hosting Setup (Annual)",
        "quantity": 1,
        "unit_price": 1200.00,
        "total": 1200.00,
        "tax": 96.00
      }
    ],
    "pdf_url": "https://estimates.aqnt.net/est_1234567890.pdf",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Estimate Numbering

You can either:
- Let AQNT auto-generate estimate numbers
- Provide your own custom estimate number

## Validity Period

Set when the estimate expires:

```json
{
  "valid_until": "2024-02-15"
}
```

After the validity date, the estimate status automatically changes to `expired`.

## Line Items

Each line item can include:

- `description` (required): Item description
- `quantity` (required): Quantity
- `unit_price` (required): Price per unit
- `tax_rate` (optional): Tax rate
- `discount` (optional): Discount amount

## Email Delivery

Automatically send estimate via email:

```json
{
  "send_email": true,
  "email_subject": "Project Estimate #EST-2024-001",
  "email_message": "Please review the attached estimate."
}
```

## Error Handling

### Invalid Customer

```json
{
  "error": {
    "type": "validation_error",
    "message": "Invalid customer ID",
    "code": "invalid_customer"
  }
}
```

