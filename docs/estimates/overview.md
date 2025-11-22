# Estimates API Overview

The Estimates API allows you to create, manage, and convert project estimates into invoices.

## Features

- **Estimate Creation**: Generate professional project estimates
- **Convert to Invoice**: Easily convert approved estimates to invoices
- **Version Control**: Track estimate revisions
- **Customer Approval**: Track customer approval status
- **Template Support**: Use customizable estimate templates
- **PDF Generation**: Generate PDF estimates automatically

## Base Endpoint

```
https://api.aqnt.net/v1/estimates
```

## Key Concepts

### Estimates

An estimate represents a quote or proposal sent to a customer. It includes:
- Line items (products/services)
- Quantities and prices
- Tax calculations
- Validity period
- Customer information

### Estimate Status

- `draft`: Estimate is being created
- `sent`: Estimate has been sent to customer
- `viewed`: Customer has viewed the estimate
- `accepted`: Customer has accepted the estimate
- `rejected`: Customer has rejected the estimate
- `expired`: Estimate has passed its validity date
- `converted`: Estimate has been converted to an invoice

## Quick Start

### Create an Estimate

```bash
curl -X POST https://api.aqnt.net/v1/estimates \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "cust_123",
    "items": [
      {
        "description": "Website Development",
        "quantity": 1,
        "unit_price": 5000.00
      }
    ],
    "valid_until": "2024-02-15"
  }'
```

## Common Use Cases

1. **Create Estimate**: Generate a new estimate for a customer
2. **Send Estimate**: Email estimate to customer
3. **Track Approval**: Monitor customer acceptance/rejection
4. **Convert to Invoice**: Convert accepted estimate to invoice
5. **Manage Versions**: Create revised estimates

## Next Steps

- [Create Estimate](/estimates/create-estimate) - Learn how to create estimates
- [Convert to Invoice](/estimates/convert-to-invoice) - Convert estimates to invoices
- [Estimate Management](/estimates/manage-estimates) - Manage existing estimates

