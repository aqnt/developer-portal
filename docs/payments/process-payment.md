# Process Payment

Process one-time payments from customers.

## Create Payment

**Endpoint:** `POST /v1/payments`

**Request Headers:**
```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
Idempotency-Key: unique-key-12345 (optional)
```

**Request Body:**

```json
{
  "amount": 100.00,
  "currency": "USD",
  "payment_method": "card",
  "payment_method_id": "pm_1234567890",
  "description": "Payment for invoice #INV-001",
  "customer_id": "cust_1234567890",
  "metadata": {
    "invoice_id": "inv_123",
    "order_id": "order_456"
  }
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
Location: https://api.aqnt.net/v1/payments/pay_1234567890
```

**Response Body:**
```json
{
  "data": {
    "id": "pay_1234567890",
    "amount": 100.00,
    "currency": "USD",
    "status": "succeeded",
    "payment_method": "card",
    "payment_method_id": "pm_1234567890",
    "payment_method_details": {
      "type": "card",
      "card": {
        "brand": "visa",
        "last4": "4242",
        "exp_month": 12,
        "exp_year": 2025
      }
    },
    "customer_id": "cust_1234567890",
    "customer": {
      "id": "cust_1234567890",
      "name": "Acme Corporation",
      "email": "billing@acme.com"
    },
    "description": "Payment for invoice #INV-001",
    "metadata": {
      "invoice_id": "inv_123",
      "order_id": "order_456"
    },
    "fees": {
      "amount": 2.90,
      "currency": "USD",
      "type": "processing_fee"
    },
    "net_amount": 97.10,
    "receipt_url": "https://receipts.aqnt.net/pay_1234567890",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "processed_at": "2024-01-15T10:30:05Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/payments/pay_1234567890",
    "customer": "https://api.aqnt.net/v1/customers/cust_1234567890",
    "invoice": "https://api.aqnt.net/v1/invoices/inv_1234567890",
    "payment_method": "https://api.aqnt.net/v1/payments/payment-methods/pm_1234567890",
    "receipt": "https://receipts.aqnt.net/pay_1234567890",
    "refund": "https://api.aqnt.net/v1/payments/pay_1234567890/refunds",
    "refunds": "https://api.aqnt.net/v1/payments/pay_1234567890/refunds"
  }
}
```

## Payment with Card Token

Process payment using a card token (for one-time use):

```json
{
  "amount": 100.00,
  "currency": "USD",
  "payment_method": "card",
  "card_token": "tok_1234567890",
  "save_payment_method": true
}
```

## Payment with Saved Payment Method

Use a previously saved payment method:

```json
{
  "amount": 100.00,
  "currency": "USD",
  "payment_method_id": "pm_1234567890",
  "customer_id": "cust_1234567890"
}
```

## Digital Wallet Payment

Process payment using digital wallet:

```json
{
  "amount": 100.00,
  "currency": "USD",
  "payment_method": "digital_wallet",
  "wallet_type": "apple_pay",
  "wallet_token": "wallet_token_123"
}
```

## Bank Transfer Payment

Process ACH or wire transfer:

```json
{
  "amount": 100.00,
  "currency": "USD",
  "payment_method": "bank_transfer",
  "bank_account": {
    "routing_number": "123456789",
    "account_number": "987654321",
    "account_type": "checking"
  }
}
```

## Get Payment

Retrieve details of a specific payment.

**Endpoint:** `GET /v1/payments/{payment_id}`

**Response:**

```json
{
  "data": {
    "id": "pay_1234567890",
    "amount": 100.00,
    "currency": "USD",
    "status": "succeeded",
    "payment_method": "card",
    "customer_id": "cust_1234567890",
    "created_at": "2024-01-15T10:30:00Z",
    "receipt_url": "https://receipts.aqnt.net/pay_1234567890"
  }
}
```

## List Payments

Retrieve a list of payments.

**Endpoint:** `GET /v1/payments`

**Query Parameters:**

- `customer_id` (string, optional): Filter by customer
- `status` (string, optional): Filter by status
- `payment_method` (string, optional): Filter by payment method
- `start_date` (string, optional): Start date (ISO 8601)
- `end_date` (string, optional): End date (ISO 8601)
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

## Error Handling

### Insufficient Funds

**Status:** `402 Payment Required`

```json
{
  "error": {
    "type": "payment_error",
    "code": "INSUFFICIENT_FUNDS",
    "message": "The payment method has insufficient funds",
    "details": [
      {
        "field": "payment_method_id",
        "message": "Insufficient funds in payment method",
        "code": "FUNDS_INSUFFICIENT",
        "value": "pm_1234567890"
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

### Card Declined

**Status:** `402 Payment Required`

```json
{
  "error": {
    "type": "payment_error",
    "code": "CARD_DECLINED",
    "message": "The card was declined",
    "details": [
      {
        "field": "payment_method_id",
        "message": "Card declined by issuer",
        "code": "DECLINE_INSUFFICIENT_FUNDS",
        "decline_code": "insufficient_funds",
        "decline_message": "Your card has insufficient funds.",
        "value": "pm_1234567890"
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

### 3D Secure Required

**Status:** `202 Accepted` (requires additional authentication)

```json
{
  "data": {
    "id": "pay_1234567890",
    "status": "requires_action",
    "next_action": {
      "type": "3d_secure",
      "authentication_url": "https://secure.aqnt.net/auth/3ds/123",
      "expires_at": "2024-01-15T10:35:00Z"
    }
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "authenticate": "https://secure.aqnt.net/auth/3ds/123"
  }
}
```

