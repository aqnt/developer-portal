# Convert Estimate to Invoice

Convert an accepted estimate directly into an invoice.

## Convert Estimate

Convert an estimate to an invoice. The estimate must be in `accepted` status.

**Endpoint:** `POST /v1/estimates/{estimate_id}/convert`

**Request Body:**

```json
{
  "invoice_number": "INV-2024-001",
  "due_date": "2024-02-15",
  "send_invoice": true
}
```

**Response:**

```json
{
  "data": {
    "invoice_id": "inv_1234567890",
    "estimate_id": "est_1234567890",
    "invoice_number": "INV-2024-001",
    "status": "sent",
    "created_at": "2024-01-20T10:30:00Z"
  }
}
```

## Automatic Conversion

When an estimate is converted:
- All line items are copied to the invoice
- Customer information is preserved
- Tax calculations are maintained
- The estimate status is updated to `converted`
- A link between estimate and invoice is created

## Partial Conversion

Convert only selected items from an estimate:

**Endpoint:** `POST /v1/estimates/{estimate_id}/convert`

**Request Body:**

```json
{
  "items": [
    {
      "item_id": "item_123",
      "quantity": 1
    }
  ],
  "invoice_number": "INV-2024-001",
  "due_date": "2024-02-15"
}
```

## Convert with Modifications

You can modify items or pricing during conversion:

**Request Body:**

```json
{
  "invoice_number": "INV-2024-001",
  "due_date": "2024-02-15",
  "items": [
    {
      "item_id": "item_123",
      "quantity": 1,
      "unit_price": 5500.00
    }
  ],
  "notes": "Updated pricing based on additional requirements"
}
```

## Error Handling

### Estimate Not Accepted

```json
{
  "error": {
    "type": "validation_error",
    "message": "Estimate must be accepted before conversion",
    "code": "estimate_not_accepted"
  }
}
```

### Estimate Already Converted

```json
{
  "error": {
    "type": "validation_error",
    "message": "Estimate has already been converted",
    "code": "estimate_already_converted"
  }
}
```

