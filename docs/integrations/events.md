# Event Subscriptions

The Events API allows you to subscribe to specific events and receive real-time notifications when they occur in your account.

## Overview

Event subscriptions enable you to:
- Subscribe to specific event types
- Receive real-time notifications
- Filter events by criteria
- Manage subscription lifecycle

## Base Endpoint

```
https://api.aqnt.net/v1/integrations/events
```

## Event Types

### Invoicing Events

- `invoice.created`: New invoice created
- `invoice.sent`: Invoice sent to customer
- `invoice.viewed`: Customer viewed invoice
- `invoice.paid`: Invoice payment received
- `invoice.overdue`: Invoice past due date
- `invoice.cancelled`: Invoice cancelled

### Payment Events

- `payment.created`: New payment created
- `payment.succeeded`: Payment completed successfully
- `payment.failed`: Payment failed
- `payment.refunded`: Payment refunded

### Transaction Events

- `transaction.created`: New transaction created
- `transaction.completed`: Transaction completed
- `transaction.refunded`: Transaction refunded

### Customer Events

- `customer.created`: New customer created
- `customer.updated`: Customer information updated
- `customer.deleted`: Customer deleted

## Create Event Subscription

Subscribe to specific events:

```bash
curl -X POST https://api.aqnt.net/v1/integrations/events/subscriptions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "events": ["invoice.paid", "payment.succeeded"],
    "webhook_url": "https://your-app.com/webhooks",
    "active": true
  }'
```

Response:

```json
{
  "data": {
    "id": "sub_1234567890",
    "events": ["invoice.paid", "payment.succeeded"],
    "webhook_url": "https://your-app.com/webhooks",
    "active": true,
    "created_at": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/integrations/events/subscriptions/sub_1234567890"
  }
}
```

## List Subscriptions

Get all your event subscriptions:

```bash
curl -X GET https://api.aqnt.net/v1/integrations/events/subscriptions \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Get Subscription

Retrieve a specific subscription:

```bash
curl -X GET https://api.aqnt.net/v1/integrations/events/subscriptions/sub_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Update Subscription

Update an existing subscription:

```bash
curl -X PATCH https://api.aqnt.net/v1/integrations/events/subscriptions/sub_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "events": ["invoice.paid", "invoice.overdue", "payment.succeeded"],
    "active": true
  }'
```

## Delete Subscription

Remove an event subscription:

```bash
curl -X DELETE https://api.aqnt.net/v1/integrations/events/subscriptions/sub_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Event Payload

When an event occurs, you'll receive a webhook with the following structure:

```json
{
  "event": {
    "id": "evt_1234567890",
    "type": "invoice.paid",
    "created_at": "2024-01-15T10:30:00Z",
    "data": {
      "object": "invoice",
      "id": "inv_1234567890",
      "amount": 1000.00,
      "currency": "USD",
      "status": "paid",
      "paid_at": "2024-01-15T10:30:00Z"
    }
  }
}
```

## Filtering Events

You can filter events by various criteria:

```bash
curl -X POST https://api.aqnt.net/v1/integrations/events/subscriptions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "events": ["invoice.*"],
    "webhook_url": "https://your-app.com/webhooks",
    "filters": {
      "amount": {
        "gte": 100
      },
      "currency": "USD"
    }
  }'
```

## Webhook Security

For security, webhooks include a signature header:

```
X-AQNT-Signature: sha256=signature_here
```

Verify the signature to ensure the webhook is from AQNT:

```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}
```

## Retry Policy

If your webhook endpoint fails, AQNT will retry:
- Immediate retry after 1 second
- Retry after 5 seconds
- Retry after 30 seconds
- Retry after 5 minutes
- Retry after 1 hour

After all retries fail, the event is marked as failed.

## Next Steps

- [Webhooks](/integrations/webhooks) - Set up webhooks
- [OAuth](/integrations/oauth) - OAuth integrations

