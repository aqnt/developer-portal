# Webhooks

Set up webhooks to receive real-time event notifications.

## Create Webhook

**Endpoint:** `POST /v1/integrations/webhooks`

**Request Body:**

```json
{
  "url": "https://your-app.com/webhook",
  "events": [
    "invoice.paid",
    "payment.succeeded",
    "expense.approved"
  ],
  "secret": "your_webhook_secret"
}
```

**Response:**

```json
{
  "data": {
    "id": "webhook_1234567890",
    "url": "https://your-app.com/webhook",
    "events": ["invoice.paid", "payment.succeeded"],
    "status": "active",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Available Events

- `invoice.created`, `invoice.paid`, `invoice.overdue`
- `payment.succeeded`, `payment.failed`
- `expense.submitted`, `expense.approved`
- `bill.paid`, `bill.overdue`
- `purchase_order.approved`

## Webhook Security

Webhooks include a signature header for verification:

```
X-AQNT-Signature: sha256=...
```

