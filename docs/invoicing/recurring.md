# Recurring Invoices

The Recurring Invoices API allows you to set up and manage automated recurring billing for your customers.

## Overview

Recurring invoices enable you to:
- Automatically generate invoices on a schedule
- Set up subscription billing
- Manage recurring payment plans
- Handle billing cycles and intervals

## Base Endpoint

```
https://api.aqnt.net/v1/invoicing/recurring
```

## Create Recurring Invoice

Set up a new recurring invoice:

```bash
curl -X POST https://api.aqnt.net/v1/invoicing/recurring \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "cust_123",
    "items": [
      {
        "description": "Monthly Subscription",
        "quantity": 1,
        "unit_price": 99.00
      }
    ],
    "frequency": "monthly",
    "interval": 1,
    "start_date": "2024-02-01",
    "end_date": "2024-12-31",
    "currency": "USD"
  }'
```

Response:

```json
{
  "data": {
    "id": "rec_1234567890",
    "customer_id": "cust_123",
    "frequency": "monthly",
    "interval": 1,
    "start_date": "2024-02-01",
    "end_date": "2024-12-31",
    "next_billing_date": "2024-02-01",
    "status": "active",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/invoicing/recurring/rec_1234567890",
    "invoices": "https://api.aqnt.net/v1/invoicing/recurring/rec_1234567890/invoices"
  }
}
```

## Frequency Options

Supported frequency values:

- `daily`: Generate invoice every day
- `weekly`: Generate invoice every week
- `monthly`: Generate invoice every month
- `quarterly`: Generate invoice every quarter
- `yearly`: Generate invoice every year

## Interval

The `interval` parameter specifies how many frequency periods between invoices:

- `interval: 1` with `frequency: "monthly"` = Every month
- `interval: 2` with `frequency: "monthly"` = Every 2 months
- `interval: 3` with `frequency: "weekly"` = Every 3 weeks

## List Recurring Invoices

Get all recurring invoices:

```bash
curl -X GET https://api.aqnt.net/v1/invoicing/recurring \
  -H "Authorization: Bearer YOUR_API_KEY"
```

With filters:

```bash
curl -X GET "https://api.aqnt.net/v1/invoicing/recurring?status=active&customer_id=cust_123" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Get Recurring Invoice

Retrieve a specific recurring invoice:

```bash
curl -X GET https://api.aqnt.net/v1/invoicing/recurring/rec_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Update Recurring Invoice

Update an existing recurring invoice:

```bash
curl -X PATCH https://api.aqnt.net/v1/invoicing/recurring/rec_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {
        "description": "Updated Monthly Subscription",
        "quantity": 1,
        "unit_price": 149.00
      }
    ]
  }'
```

## Pause Recurring Invoice

Temporarily pause a recurring invoice:

```bash
curl -X POST https://api.aqnt.net/v1/invoicing/recurring/rec_1234567890/pause \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Resume Recurring Invoice

Resume a paused recurring invoice:

```bash
curl -X POST https://api.aqnt.net/v1/invoicing/recurring/rec_1234567890/resume \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Cancel Recurring Invoice

Cancel a recurring invoice:

```bash
curl -X DELETE https://api.aqnt.net/v1/invoicing/recurring/rec_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Get Generated Invoices

Retrieve all invoices generated from a recurring invoice:

```bash
curl -X GET https://api.aqnt.net/v1/invoicing/recurring/rec_1234567890/invoices \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Status Values

- `active`: Recurring invoice is active and generating invoices
- `paused`: Recurring invoice is paused
- `cancelled`: Recurring invoice has been cancelled
- `completed`: Recurring invoice has reached its end date

## Webhooks

Recurring invoices trigger webhooks:

- `recurring_invoice.created`: New recurring invoice created
- `recurring_invoice.updated`: Recurring invoice updated
- `recurring_invoice.paused`: Recurring invoice paused
- `recurring_invoice.resumed`: Recurring invoice resumed
- `recurring_invoice.cancelled`: Recurring invoice cancelled
- `recurring_invoice.invoice_generated`: New invoice generated from recurring invoice

## Next Steps

- [Create Invoice](/invoicing/create-invoice) - Learn how to create invoices
- [Invoice Management](/invoicing/manage-invoices) - Manage existing invoices
- [Payment Tracking](/invoicing/payments) - Track invoice payments

