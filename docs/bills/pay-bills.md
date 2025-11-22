# Pay Bills

Process bill payments.

## Pay Bill

Pay a bill.

**Endpoint:** `POST /v1/bills/{bill_id}/pay`

**Request Body:**

```json
{
  "amount": 540.00,
  "payment_method": "bank_transfer",
  "payment_method_id": "pm_1234567890",
  "payment_date": "2024-02-10",
  "reference": "TXN-123456",
  "notes": "Payment processed"
}
```

**Response:**

```json
{
  "data": {
    "id": "payment_1234567890",
    "bill_id": "bill_1234567890",
    "amount": 540.00,
    "payment_method": "bank_transfer",
    "status": "completed",
    "payment_date": "2024-02-10",
    "processed_at": "2024-02-10T14:30:00Z"
  }
}
```

## Partial Payment

Make a partial payment:

```json
{
  "amount": 270.00,
  "payment_method": "bank_transfer",
  "notes": "Partial payment - remaining balance due"
}
```

## Get Payment

Retrieve details of a specific payment.

**Endpoint:** `GET /v1/bills/payments/{payment_id}`

## List Payments

Retrieve payments for a bill.

**Endpoint:** `GET /v1/bills/{bill_id}/payments`

## Payment Methods

Supported payment methods:

- **Bank Transfer**: ACH, wire transfer
- **Check**: Physical check
- **Credit Card**: Credit card payment
- **Other**: Custom payment method

## Payment Status

- `pending`: Payment is pending
- `processing`: Payment is being processed
- `completed`: Payment completed successfully
- `failed`: Payment failed
- `cancelled`: Payment was cancelled

## Bulk Payment

Pay multiple bills at once.

**Endpoint:** `POST /v1/bills/pay-bulk`

**Request Body:**

```json
{
  "bill_ids": [
    "bill_1234567890",
    "bill_0987654321",
    "bill_1122334455"
  ],
  "payment_method": "bank_transfer",
  "payment_method_id": "pm_1234567890",
  "payment_date": "2024-02-10"
}
```

**Response:**

```json
{
  "data": {
    "total_bills": 3,
    "total_amount": 1620.00,
    "payments": [
      {
        "bill_id": "bill_1234567890",
        "payment_id": "payment_1234567890",
        "status": "completed"
      }
    ]
  }
}
```

## Cancel Payment

Cancel a pending payment.

**Endpoint:** `POST /v1/bills/payments/{payment_id}/cancel`

**Request Body:**

```json
{
  "reason": "Payment error"
}
```

