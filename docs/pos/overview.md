# POS API Overview

The Point of Sale (POS) API allows you to manage sales transactions, inventory, payments, and store operations for retail and restaurant businesses.

## Features

- **Transaction Management**: Create and process sales transactions
- **Inventory Tracking**: Real-time inventory management and stock updates
- **Payment Processing**: Support for multiple payment methods
- **Multi-location**: Manage multiple store locations
- **Reporting**: Sales analytics and reporting
- **Receipt Generation**: Digital and print receipt generation

## Base Endpoint

```
https://api.aqnt.net/v1/pos
```

## Key Concepts

### Transactions

A transaction represents a single sale. It includes:
- Items purchased
- Quantities
- Prices
- Payment method
- Customer information (optional)
- Location/store

### Inventory

Track product stock levels, variants, and locations. The system automatically updates inventory when transactions are completed.

### Payments

Support for:
- Cash
- Credit/Debit cards
- Digital wallets
- Gift cards
- Store credit

## Quick Start

### Create a Transaction

```bash
curl -X POST https://api.aqnt.net/v1/pos/transactions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "location_id": "loc_123",
    "items": [
      {
        "product_id": "prod_456",
        "quantity": 2,
        "price": 29.99
      }
    ],
    "payment_method": "card",
    "customer_id": "cust_789"
  }'
```

## Common Use Cases

1. **Process a Sale**: Create a transaction with items and process payment
2. **Check Inventory**: Query stock levels before selling
3. **Refund**: Process returns and refunds
4. **Generate Receipt**: Create digital or print receipts
5. **Sales Reports**: Retrieve sales data for analytics

## Next Steps

- [Transactions](/pos/transactions) - Create and manage sales transactions
- [Inventory](/pos/inventory) - Manage product inventory
- [Payments](/pos/payments) - Process payments and refunds
- [Locations](/pos/locations) - Manage store locations

