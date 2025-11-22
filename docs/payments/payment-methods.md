# Payment Methods

Manage customer payment methods for faster checkout and recurring payments.

## Create Payment Method

Add a new payment method for a customer.

**Endpoint:** `POST /v1/payments/payment-methods`

**Request Body:**

```json
{
  "customer_id": "cust_1234567890",
  "type": "card",
  "card": {
    "number": "4242424242424242",
    "exp_month": 12,
    "exp_year": 2025,
    "cvc": "123"
  },
  "billing_details": {
    "name": "John Doe",
    "email": "john@example.com",
    "address": {
      "line1": "123 Main St",
      "city": "San Francisco",
      "state": "CA",
      "postal_code": "94102",
      "country": "US"
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "id": "pm_1234567890",
    "customer_id": "cust_1234567890",
    "type": "card",
    "card": {
      "brand": "visa",
      "last4": "4242",
      "exp_month": 12,
      "exp_year": 2025
    },
    "billing_details": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Payment Method

Retrieve details of a specific payment method.

**Endpoint:** `GET /v1/payments/payment-methods/{payment_method_id}`

## List Payment Methods

Retrieve all payment methods for a customer.

**Endpoint:** `GET /v1/payments/payment-methods`

**Query Parameters:**

- `customer_id` (string, required): Filter by customer
- `type` (string, optional): Filter by type

**Response:**

```json
{
  "data": [
    {
      "id": "pm_1234567890",
      "customer_id": "cust_1234567890",
      "type": "card",
      "card": {
        "brand": "visa",
        "last4": "4242"
      },
      "is_default": true
    },
    {
      "id": "pm_0987654321",
      "customer_id": "cust_1234567890",
      "type": "bank_account",
      "bank_account": {
        "bank_name": "Chase",
        "last4": "1234",
        "account_type": "checking"
      },
      "is_default": false
    }
  ]
}
```

## Update Payment Method

Update payment method details.

**Endpoint:** `PATCH /v1/payments/payment-methods/{payment_method_id}`

**Request Body:**

```json
{
  "billing_details": {
    "name": "John Doe Updated",
    "email": "john.updated@example.com"
  },
  "is_default": true
}
```

## Delete Payment Method

Remove a payment method.

**Endpoint:** `DELETE /v1/payments/payment-methods/{payment_method_id}`

## Payment Method Types

### Card

```json
{
  "type": "card",
  "card": {
    "number": "4242424242424242",
    "exp_month": 12,
    "exp_year": 2025,
    "cvc": "123"
  }
}
```

### Bank Account

```json
{
  "type": "bank_account",
  "bank_account": {
    "routing_number": "123456789",
    "account_number": "987654321",
    "account_type": "checking"
  }
}
```

### Digital Wallet

```json
{
  "type": "digital_wallet",
  "wallet_type": "apple_pay",
  "wallet_token": "wallet_token_123"
}
```

## Set Default Payment Method

Set a payment method as the default for a customer.

**Endpoint:** `POST /v1/payments/payment-methods/{payment_method_id}/set-default`

