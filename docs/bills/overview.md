# Bills API Overview

The Bills API allows you to manage and pay vendor bills, track due dates, and automate bill payments.

## Features

- **Bill Management**: Create and manage vendor bills
- **Bill Payment**: Process bill payments
- **Due Date Tracking**: Track bill due dates and avoid late fees
- **Recurring Bills**: Set up recurring bill payments
- **Payment Scheduling**: Schedule bill payments in advance
- **Multi-currency**: Support for bills in multiple currencies
- **Bill Approval**: Approval workflows for bill payments
- **Payment Methods**: Support for multiple payment methods

## Base Endpoint

```
https://api.aqnt.net/v1/bills
```

## Key Concepts

### Bills

A bill represents an amount owed to a vendor. It includes:
- Vendor information
- Amount and currency
- Due date
- Line items
- Payment status

### Bill Status

- `draft`: Bill is being created
- `pending`: Bill is pending payment
- `scheduled`: Bill payment is scheduled
- `paid`: Bill has been paid
- `overdue`: Bill is past due date
- `cancelled`: Bill was cancelled

## Quick Start

### Create a Bill

```bash
curl -X POST https://api.aqnt.net/v1/bills \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "vendor_id": "vend_123",
    "amount": 500.00,
    "due_date": "2024-02-15",
    "description": "Monthly utilities bill"
  }'
```

## Common Use Cases

1. **Create Bill**: Record bills from vendors
2. **Schedule Payment**: Schedule bill payments
3. **Pay Bill**: Process bill payments
4. **Track Due Dates**: Monitor upcoming bill due dates
5. **Recurring Bills**: Set up automatic bill payments

## Next Steps

- [Manage Bills](/bills/manage-bills) - Create and manage bills
- [Pay Bills](/bills/pay-bills) - Process bill payments
- [Recurring Bills](/bills/recurring) - Set up recurring bill payments
- [Payment Scheduling](/bills/scheduling) - Schedule bill payments

