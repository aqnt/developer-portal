# POS Transactions

Create and manage sales transactions through the POS API.

## Create Transaction

Create a new sales transaction.

**Endpoint:** `POST /v1/pos/transactions`

**Request Body:**

```json
{
  "location_id": "loc_1234567890",
  "items": [
    {
      "product_id": "prod_1234567890",
      "quantity": 2,
      "price": 29.99,
      "discount": 0.00
    },
    {
      "product_id": "prod_0987654321",
      "quantity": 1,
      "price": 49.99
    }
  ],
  "payment_method": "card",
  "payment_details": {
    "card_last4": "4242",
    "card_brand": "visa"
  },
  "customer_id": "cust_1234567890",
  "notes": "Customer requested gift receipt",
  "tax_rate": 0.08,
  "discount_code": "SUMMER10"
}
```

**Response:**

```json
{
  "data": {
    "id": "txn_1234567890",
    "location_id": "loc_1234567890",
    "status": "completed",
    "items": [
      {
        "product_id": "prod_1234567890",
        "name": "Product Name",
        "quantity": 2,
        "price": 29.99,
        "subtotal": 59.98
      }
    ],
    "subtotal": 109.97,
    "tax": 8.80,
    "discount": 10.00,
    "total": 108.77,
    "payment_method": "card",
    "customer_id": "cust_1234567890",
    "created_at": "2024-01-15T10:30:00Z",
    "receipt_url": "https://receipts.aqnt.net/txn_1234567890"
  }
}
```

## Get Transaction

Retrieve details of a specific transaction.

**Endpoint:** `GET /v1/pos/transactions/{transaction_id}`

**Response:**

```json
{
  "data": {
    "id": "txn_1234567890",
    "location_id": "loc_1234567890",
    "status": "completed",
    "items": [...],
    "subtotal": 109.97,
    "tax": 8.80,
    "total": 118.77,
    "payment_method": "card",
    "customer_id": "cust_1234567890",
    "created_at": "2024-01-15T10:30:00Z",
    "receipt_url": "https://receipts.aqnt.net/txn_1234567890"
  }
}
```

## List Transactions

Retrieve a list of transactions with optional filtering.

**Endpoint:** `GET /v1/pos/transactions`

**Query Parameters:**

- `location_id` (string, optional): Filter by location
- `status` (string, optional): Filter by status (`pending`, `completed`, `refunded`)
- `customer_id` (string, optional): Filter by customer
- `start_date` (string, optional): Start date (ISO 8601)
- `end_date` (string, optional): End date (ISO 8601)
- `limit` (integer, optional): Number of results (default: 20, max: 100)
- `offset` (integer, optional): Pagination offset

**Example:**

```bash
curl -X GET "https://api.aqnt.net/v1/pos/transactions?location_id=loc_123&status=completed&limit=50" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Refund Transaction

Process a refund for a transaction.

**Endpoint:** `POST /v1/pos/transactions/{transaction_id}/refund`

**Request Body:**

```json
{
  "amount": 29.99,
  "reason": "Customer return",
  "items": [
    {
      "item_id": "item_123",
      "quantity": 1
    }
  ]
}
```

**Response:**

```json
{
  "data": {
    "id": "refund_1234567890",
    "transaction_id": "txn_1234567890",
    "amount": 29.99,
    "status": "completed",
    "created_at": "2024-01-15T11:00:00Z"
  }
}
```

## Transaction Status

Transactions can have the following statuses:

- `pending`: Transaction is being processed
- `completed`: Transaction completed successfully
- `refunded`: Transaction has been refunded
- `failed`: Transaction failed

## Error Handling

### Insufficient Inventory

```json
{
  "error": {
    "type": "inventory_error",
    "message": "Insufficient stock for product",
    "code": "insufficient_stock",
    "details": {
      "product_id": "prod_123",
      "requested": 10,
      "available": 5
    }
  }
}
```

### Invalid Payment Method

```json
{
  "error": {
    "type": "payment_error",
    "message": "Invalid payment method",
    "code": "invalid_payment_method"
  }
}
```

