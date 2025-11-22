# Invoice Payments

Track and record payments against invoices.

## Record Payment

Record a payment against an invoice.

**Endpoint:** `POST /v1/invoicing/invoices/{invoice_id}/payments`

**Request Body:**

```json
{
  "amount": 1836.00,
  "payment_date": "2024-01-20",
  "payment_method": "bank_transfer",
  "reference": "TXN-123456",
  "notes": "Payment received via bank transfer"
}
```

**Response:**

```json
{
  "data": {
    "id": "pay_1234567890",
    "invoice_id": "inv_1234567890",
    "amount": 1836.00,
    "payment_method": "bank_transfer",
    "payment_date": "2024-01-20",
    "reference": "TXN-123456",
    "created_at": "2024-01-20T14:30:00Z"
  }
}
```

## Get Payment

Retrieve details of a specific payment.

**Endpoint:** `GET /v1/invoicing/payments/{payment_id}`

**Response:**

```json
{
  "data": {
    "id": "pay_1234567890",
    "invoice_id": "inv_1234567890",
    "amount": 1836.00,
    "payment_method": "bank_transfer",
    "payment_date": "2024-01-20",
    "reference": "TXN-123456",
    "created_at": "2024-01-20T14:30:00Z"
  }
}
```

## List Payments

Retrieve payments with optional filtering.

**Endpoint:** `GET /v1/invoicing/payments`

**Query Parameters:**

- `invoice_id` (string, optional): Filter by invoice
- `customer_id` (string, optional): Filter by customer
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

## Payment Methods

Supported payment methods:

- `cash`: Cash payment
- `check`: Check payment
- `bank_transfer`: Bank transfer/wire
- `credit_card`: Credit card payment
- `paypal`: PayPal payment
- `other`: Other payment method

## Refund Payment

Refund a payment.

**Endpoint:** `POST /v1/invoicing/payments/{payment_id}/refund`

**Request Body:**

```json
{
  "amount": 500.00,
  "reason": "Partial refund for cancelled services"
}
```

**Response:**

```json
{
  "data": {
    "id": "refund_1234567890",
    "payment_id": "pay_1234567890",
    "amount": 500.00,
    "status": "completed",
    "created_at": "2024-01-21T10:00:00Z"
  }
}
```

## Partial Payments

You can record partial payments against an invoice:

```json
{
  "amount": 500.00,
  "payment_date": "2024-01-20",
  "payment_method": "bank_transfer"
}
```

The invoice status will update to `partially_paid` until the full amount is paid.

