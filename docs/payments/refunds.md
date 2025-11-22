# Payment Refunds

Process refunds for payments.

## Create Refund

Refund a payment.

**Endpoint:** `POST /v1/payments/{payment_id}/refunds`

**Request Body:**

```json
{
  "amount": 50.00,
  "reason": "Customer requested refund",
  "metadata": {
    "refund_reason_code": "customer_request"
  }
}
```

**Response:**

```json
{
  "data": {
    "id": "refund_1234567890",
    "payment_id": "pay_1234567890",
    "amount": 50.00,
    "status": "succeeded",
    "reason": "Customer requested refund",
    "created_at": "2024-01-15T11:00:00Z"
  }
}
```

## Full Refund

To refund the full amount, omit the `amount` field:

```json
{
  "reason": "Full refund - order cancelled"
}
```

## Get Refund

Retrieve details of a specific refund.

**Endpoint:** `GET /v1/payments/refunds/{refund_id}`

## List Refunds

Retrieve all refunds for a payment.

**Endpoint:** `GET /v1/payments/{payment_id}/refunds`

## Refund Status

- `pending`: Refund is being processed
- `processing`: Refund is processing
- `succeeded`: Refund completed successfully
- `failed`: Refund failed
- `cancelled`: Refund was cancelled

## Refund Timeframes

Refund processing times vary by payment method:

- **Credit/Debit Cards**: 5-10 business days
- **Digital Wallets**: 3-5 business days
- **Bank Transfers**: 5-7 business days

## Partial Refunds

You can issue multiple partial refunds up to the total payment amount:

```json
{
  "amount": 25.00,
  "reason": "Partial refund for damaged item"
}
```

## Error Handling

### Refund Exceeds Payment Amount

```json
{
  "error": {
    "type": "refund_error",
    "message": "Refund amount exceeds payment amount",
    "code": "refund_amount_exceeded"
  }
}
```

### Refund Already Processed

```json
{
  "error": {
    "type": "refund_error",
    "message": "Payment has already been fully refunded",
    "code": "already_refunded"
  }
}
```

