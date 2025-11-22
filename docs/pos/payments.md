# POS Payments

Process payments, handle refunds, and manage payment methods.

## Process Payment

Process a payment for a transaction.

**Endpoint:** `POST /v1/pos/payments`

**Request Body:**

```json
{
  "transaction_id": "txn_1234567890",
  "amount": 118.77,
  "payment_method": "card",
  "payment_details": {
    "card_token": "card_token_123",
    "card_last4": "4242",
    "card_brand": "visa"
  },
  "tip": 5.00
}
```

**Response:**

```json
{
  "data": {
    "id": "pay_1234567890",
    "transaction_id": "txn_1234567890",
    "amount": 118.77,
    "tip": 5.00,
    "total": 123.77,
    "payment_method": "card",
    "status": "succeeded",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Payment Methods

Supported payment methods:

### Card Payments

```json
{
  "payment_method": "card",
  "payment_details": {
    "card_token": "card_token_123",
    "card_last4": "4242",
    "card_brand": "visa"
  }
}
```

### Cash Payments

```json
{
  "payment_method": "cash",
  "payment_details": {
    "tendered": 150.00,
    "change": 26.23
  }
}
```

### Digital Wallet

```json
{
  "payment_method": "digital_wallet",
  "payment_details": {
    "wallet_type": "apple_pay",
    "transaction_id": "wallet_txn_123"
  }
}
```

### Gift Card

```json
{
  "payment_method": "gift_card",
  "payment_details": {
    "gift_card_id": "gc_1234567890",
    "amount": 50.00
  }
}
```

## Get Payment

Retrieve details of a specific payment.

**Endpoint:** `GET /v1/pos/payments/{payment_id}`

**Response:**

```json
{
  "data": {
    "id": "pay_1234567890",
    "transaction_id": "txn_1234567890",
    "amount": 118.77,
    "payment_method": "card",
    "status": "succeeded",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Refund Payment

Process a refund for a payment.

**Endpoint:** `POST /v1/pos/payments/{payment_id}/refund`

**Request Body:**

```json
{
  "amount": 29.99,
  "reason": "Customer return"
}
```

**Response:**

```json
{
  "data": {
    "id": "refund_1234567890",
    "payment_id": "pay_1234567890",
    "amount": 29.99,
    "status": "completed",
    "created_at": "2024-01-15T11:00:00Z"
  }
}
```

## Payment Status

Payments can have the following statuses:

- `pending`: Payment is being processed
- `succeeded`: Payment completed successfully
- `failed`: Payment failed
- `refunded`: Payment has been refunded
- `partially_refunded`: Payment partially refunded

## Error Handling

### Insufficient Funds

```json
{
  "error": {
    "type": "payment_error",
    "message": "Insufficient funds",
    "code": "insufficient_funds"
  }
}
```

### Card Declined

```json
{
  "error": {
    "type": "payment_error",
    "message": "Card declined",
    "code": "card_declined",
    "details": {
      "decline_code": "insufficient_funds"
    }
  }
}
```

