# Recurring Bills

Set up and manage recurring bill payments.

## Create Recurring Bill

Set up a recurring bill.

**Endpoint:** `POST /v1/bills/recurring`

**Request Body:**

```json
{
  "vendor_id": "vend_1234567890",
  "description": "Monthly Internet Service",
  "amount": 100.00,
  "currency": "USD",
  "category": "Utilities",
  "interval": "month",
  "interval_count": 1,
  "start_date": "2024-02-01",
  "end_date": null,
  "payment_method": "bank_transfer",
  "payment_method_id": "pm_1234567890",
  "auto_pay": true
}
```

**Response:**

```json
{
  "data": {
    "id": "recurring_1234567890",
    "vendor_id": "vend_1234567890",
    "description": "Monthly Internet Service",
    "amount": 100.00,
    "currency": "USD",
    "interval": "month",
    "start_date": "2024-02-01",
    "auto_pay": true,
    "status": "active",
    "next_bill_date": "2024-02-01",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Recurring Bill

Retrieve details of a specific recurring bill.

**Endpoint:** `GET /v1/bills/recurring/{recurring_bill_id}`

## List Recurring Bills

Retrieve all recurring bills.

**Endpoint:** `GET /v1/bills/recurring`

**Query Parameters:**

- `vendor_id` (string, optional): Filter by vendor
- `status` (string, optional): Filter by status

## Update Recurring Bill

Update recurring bill details.

**Endpoint:** `PATCH /v1/bills/recurring/{recurring_bill_id}`

**Request Body:**

```json
{
  "amount": 120.00,
  "auto_pay": false
}
```

## Cancel Recurring Bill

Cancel a recurring bill.

**Endpoint:** `POST /v1/bills/recurring/{recurring_bill_id}/cancel`

**Request Body:**

```json
{
  "reason": "Service cancelled"
}
```

## Recurring Intervals

- `day`: Daily
- `week`: Weekly
- `month`: Monthly
- `quarter`: Quarterly
- `year`: Yearly

## Auto-pay

Enable automatic payment for recurring bills:

```json
{
  "auto_pay": true,
  "payment_method": "bank_transfer",
  "payment_method_id": "pm_1234567890"
}
```

When auto-pay is enabled, bills are automatically paid on the due date.

## Recurring Bill Status

- `active`: Recurring bill is active
- `paused`: Recurring bill is paused
- `cancelled`: Recurring bill cancelled
- `expired`: Recurring bill expired

## Bill History

Get history of bills generated from a recurring bill.

**Endpoint:** `GET /v1/bills/recurring/{recurring_bill_id}/bills`

**Response:**

```json
{
  "data": [
    {
      "id": "bill_1234567890",
      "amount": 100.00,
      "due_date": "2024-02-15",
      "status": "paid",
      "paid_date": "2024-02-10"
    }
  ]
}
```

