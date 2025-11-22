# Payment Links

Create shareable payment links that customers can use to make payments.

## Create Payment Link

Generate a shareable payment link.

**Endpoint:** `POST /v1/payments/payment-links`

**Request Body:**

```json
{
  "amount": 100.00,
  "currency": "USD",
  "description": "Payment for services",
  "customer_id": "cust_1234567890",
  "expires_at": "2024-02-15T23:59:59Z",
  "metadata": {
    "invoice_id": "inv_123"
  }
}
```

**Response:**

```json
{
  "data": {
    "id": "link_1234567890",
    "url": "https://pay.aqnt.net/link_1234567890",
    "amount": 100.00,
    "currency": "USD",
    "description": "Payment for services",
    "status": "active",
    "expires_at": "2024-02-15T23:59:59Z",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Payment Link

Retrieve details of a specific payment link.

**Endpoint:** `GET /v1/payments/payment-links/{payment_link_id}`

## List Payment Links

Retrieve all payment links.

**Endpoint:** `GET /v1/payments/payment-links`

**Query Parameters:**

- `status` (string, optional): Filter by status
- `customer_id` (string, optional): Filter by customer

## Update Payment Link

Update payment link details.

**Endpoint:** `PATCH /v1/payments/payment-links/{payment_link_id}`

**Request Body:**

```json
{
  "amount": 150.00,
  "expires_at": "2024-03-15T23:59:59Z"
}
```

## Deactivate Payment Link

Deactivate a payment link.

**Endpoint:** `POST /v1/payments/payment-links/{payment_link_id}/deactivate`

## Payment Link Status

- `active`: Link is active and can be used
- `expired`: Link has expired
- `completed`: Payment completed via link
- `cancelled`: Link was cancelled

## Payment Link Analytics

Get analytics for a payment link.

**Endpoint:** `GET /v1/payments/payment-links/{payment_link_id}/analytics`

**Response:**

```json
{
  "data": {
    "link_id": "link_1234567890",
    "views": 45,
    "clicks": 32,
    "conversions": 8,
    "conversion_rate": 25.0,
    "total_amount": 800.00
  }
}
```

