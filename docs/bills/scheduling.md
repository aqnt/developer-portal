# Bill Payment Scheduling

Schedule bill payments in advance.

## Schedule Payment

Schedule a bill payment for a future date.

**Endpoint:** `POST /v1/bills/{bill_id}/schedule`

**Request Body:**

```json
{
  "amount": 540.00,
  "payment_method": "bank_transfer",
  "payment_method_id": "pm_1234567890",
  "scheduled_date": "2024-02-10",
  "notes": "Scheduled payment"
}
```

**Response:**

```json
{
  "data": {
    "id": "scheduled_1234567890",
    "bill_id": "bill_1234567890",
    "amount": 540.00,
    "scheduled_date": "2024-02-10",
    "status": "scheduled",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Scheduled Payment

Retrieve details of a scheduled payment.

**Endpoint:** `GET /v1/bills/scheduled/{scheduled_payment_id}`

## List Scheduled Payments

Retrieve all scheduled payments.

**Endpoint:** `GET /v1/bills/scheduled`

**Query Parameters:**

- `start_date` (string, optional): Filter by start date
- `end_date` (string, optional): Filter by end date
- `status` (string, optional): Filter by status

## Update Scheduled Payment

Update a scheduled payment.

**Endpoint:** `PATCH /v1/bills/scheduled/{scheduled_payment_id}`

**Request Body:**

```json
{
  "scheduled_date": "2024-02-15",
  "amount": 550.00
}
```

## Cancel Scheduled Payment

Cancel a scheduled payment.

**Endpoint:** `POST /v1/bills/scheduled/{scheduled_payment_id}/cancel`

## Scheduled Payment Status

- `scheduled`: Payment is scheduled
- `processing`: Payment is being processed
- `completed`: Payment completed
- `failed`: Payment failed
- `cancelled`: Payment was cancelled

## Payment Reminders

Set up reminders for scheduled payments:

```json
{
  "reminders": [
    {
      "days_before": 7,
      "method": "email"
    },
    {
      "days_before": 1,
      "method": "email"
    }
  ]
}
```

## Bulk Scheduling

Schedule multiple bill payments:

**Endpoint:** `POST /v1/bills/schedule-bulk`

**Request Body:**

```json
{
  "bills": [
    {
      "bill_id": "bill_1234567890",
      "scheduled_date": "2024-02-10",
      "amount": 540.00
    },
    {
      "bill_id": "bill_0987654321",
      "scheduled_date": "2024-02-15",
      "amount": 300.00
    }
  ],
  "payment_method": "bank_transfer",
  "payment_method_id": "pm_1234567890"
}
```

