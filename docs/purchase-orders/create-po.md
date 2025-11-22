# Create Purchase Order

Create purchase orders for vendors.

## Create Purchase Order

**Endpoint:** `POST /v1/purchase-orders`

**Request Body:**

```json
{
  "vendor_id": "vend_1234567890",
  "po_number": "PO-2024-001",
  "issue_date": "2024-01-15",
  "delivery_date": "2024-02-15",
  "currency": "USD",
  "items": [
    {
      "description": "Office Chairs",
      "quantity": 10,
      "unit_price": 150.00,
      "sku": "CHAIR-001",
      "tax_rate": 0.08
    },
    {
      "description": "Desks",
      "quantity": 5,
      "unit_price": 300.00,
      "sku": "DESK-001",
      "tax_rate": 0.08
    }
  ],
  "shipping_address": {
    "name": "Company Name",
    "street": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "postal_code": "94102",
    "country": "US"
  },
  "payment_terms": "Net 30",
  "notes": "Please deliver during business hours"
}
```

**Response:**

```json
{
  "data": {
    "id": "po_1234567890",
    "po_number": "PO-2024-001",
    "vendor_id": "vend_1234567890",
    "status": "draft",
    "issue_date": "2024-01-15",
    "delivery_date": "2024-02-15",
    "subtotal": 3000.00,
    "tax": 240.00,
    "total": 3240.00,
    "currency": "USD",
    "items": [
      {
        "description": "Office Chairs",
        "quantity": 10,
        "unit_price": 150.00,
        "total": 1500.00
      }
    ],
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## PO Numbering

You can either:
- Let AQNT auto-generate PO numbers
- Provide your own custom PO number

## Line Items

Each line item can include:

- `description` (required): Item description
- `quantity` (required): Quantity ordered
- `unit_price` (required): Price per unit
- `sku` (optional): Product SKU
- `tax_rate` (optional): Tax rate
- `discount` (optional): Discount amount

## Shipping Address

Specify delivery address:

```json
{
  "shipping_address": {
    "name": "Company Name",
    "street": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "postal_code": "94102",
    "country": "US"
  }
}
```

## Payment Terms

Common payment terms:

- `Net 15`: Payment due in 15 days
- `Net 30`: Payment due in 30 days
- `Net 60`: Payment due in 60 days
- `Due on Receipt`: Payment due immediately
- `2/10 Net 30`: 2% discount if paid within 10 days, otherwise Net 30

## Multi-currency

Support for multiple currencies:

```json
{
  "currency": "EUR",
  "items": [...]
}
```

## Email Delivery

Automatically send PO to vendor via email:

```json
{
  "send_email": true,
  "email_subject": "Purchase Order #PO-2024-001",
  "email_message": "Please find the purchase order attached."
}
```

