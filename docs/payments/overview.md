# Payments API Overview

The Payments API allows you to accept and process payments from customers through multiple payment methods and gateways.

## Features

- **Multiple Payment Methods**: Credit cards, debit cards, digital wallets, bank transfers
- **Payment Processing**: Secure payment processing with PCI compliance
- **Recurring Payments**: Set up subscription and recurring billing
- **Payment Links**: Generate shareable payment links
- **Refunds**: Process full or partial refunds
- **Payment Methods Management**: Store and manage customer payment methods
- **Multi-currency**: Support for multiple currencies
- **3D Secure**: Enhanced security with 3D Secure authentication

## Base Endpoint

```
https://api.aqnt.net/v1/payments
```

## Key Concepts

### Payment Methods

Supported payment methods:
- Credit/Debit Cards (Visa, Mastercard, Amex, Discover)
- Digital Wallets (Apple Pay, Google Pay, PayPal)
- Bank Transfers (ACH, Wire)
- Cryptocurrency (Bitcoin, Ethereum)

### Payment Status

- `pending`: Payment is being processed
- `processing`: Payment is being authorized
- `succeeded`: Payment completed successfully
- `failed`: Payment failed
- `refunded`: Payment has been refunded
- `partially_refunded`: Payment partially refunded
- `cancelled`: Payment was cancelled

## Quick Start

### Accept a Payment

```bash
curl -X POST https://api.aqnt.net/v1/payments \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100.00,
    "currency": "USD",
    "payment_method": "card",
    "card_token": "card_token_123",
    "description": "Payment for invoice #INV-001"
  }'
```

## Common Use Cases

1. **One-time Payments**: Process single payments
2. **Recurring Payments**: Set up subscriptions
3. **Payment Links**: Share payment links with customers
4. **Refunds**: Process refunds for payments
5. **Payment Methods**: Save customer payment methods for future use

## Next Steps

- [Process Payment](/payments/process-payment) - Learn how to process payments
- [Payment Methods](/payments/payment-methods) - Manage payment methods
- [Recurring Payments](/payments/recurring) - Set up recurring billing
- [Payment Links](/payments/payment-links) - Create shareable payment links
- [Refunds](/payments/refunds) - Process refunds

