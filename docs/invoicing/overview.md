# Invoicing API Overview

The Invoicing API allows you to create, manage, and track professional invoices for your business.

## Features

- **Invoice Creation**: Generate professional invoices with customizable templates
- **Payment Tracking**: Track invoice payments and status
- **Automated Reminders**: Send automatic payment reminders
- **Multi-currency**: Support for multiple currencies
- **Recurring Invoices**: Set up recurring billing
- **PDF Generation**: Generate PDF invoices automatically
- **Email Delivery**: Send invoices directly to customers via email

## Base Endpoint

```
https://api.aqnt.net/v1/invoicing
```

## Key Concepts

### Invoices

An invoice represents a bill sent to a customer. It includes:
- Line items (products/services)
- Quantities and prices
- Tax calculations
- Payment terms
- Due date
- Customer information

### Invoice Status

- `draft`: Invoice is being created
- `sent`: Invoice has been sent to customer
- `viewed`: Customer has viewed the invoice
- `paid`: Invoice has been paid
- `overdue`: Invoice is past due date
- `cancelled`: Invoice has been cancelled

## Quick Start

### Create an Invoice

```bash
curl -X POST https://api.aqnt.net/v1/invoicing/invoices \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "cust_123",
    "items": [
      {
        "description": "Web Development Services",
        "quantity": 10,
        "unit_price": 150.00
      }
    ],
    "due_date": "2024-02-15",
    "currency": "USD"
  }'
```

## Common Use Cases

1. **Create Invoice**: Generate a new invoice for a customer
2. **Send Invoice**: Email invoice to customer
3. **Track Payment**: Record payment against invoice
4. **Set Reminders**: Configure automatic payment reminders
5. **Generate Reports**: Retrieve invoice analytics

## Next Steps

- [Create Invoice](/invoicing/create-invoice) - Learn how to create invoices
- [Invoice Management](/invoicing/manage-invoices) - Manage existing invoices
- [Payment Tracking](/invoicing/payments) - Track invoice payments
- [Recurring Invoices](/invoicing/recurring) - Set up recurring billing

