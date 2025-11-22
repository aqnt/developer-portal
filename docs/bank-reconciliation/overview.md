# Bank Reconciliation API Overview

The Bank Reconciliation API allows you to reconcile bank transactions with your accounting records automatically.

## Features

- **Automatic Reconciliation**: AI-powered matching of bank transactions
- **Manual Reconciliation**: Manually match transactions
- **Transaction Matching**: Match bank transactions to invoices, bills, expenses
- **Discrepancy Detection**: Identify and resolve discrepancies
- **Reconciliation Reports**: Generate reconciliation reports
- **Multi-account Support**: Reconcile multiple bank accounts
- **Import Bank Statements**: Import bank statements (CSV, OFX, QIF)

## Base Endpoint

```
https://api.aqnt.net/v1/bank-reconciliation
```

## Key Concepts

### Reconciliation

Reconciliation is the process of matching bank transactions with accounting records to ensure accuracy.

### Reconciliation Status

- `pending`: Transactions pending reconciliation
- `matched`: Transactions matched to records
- `unmatched`: Transactions without matches
- `reconciled`: Reconciliation completed
- `discrepancy`: Discrepancy detected

## Quick Start

### Start Reconciliation

```bash
curl -X POST https://api.aqnt.net/v1/bank-reconciliation/reconcile \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "account_id": "acc_123",
    "start_date": "2024-01-01",
    "end_date": "2024-01-31"
  }'
```

## Common Use Cases

1. **Auto-reconcile**: Automatically match bank transactions
2. **Manual Match**: Manually match transactions
3. **Resolve Discrepancies**: Fix reconciliation discrepancies
4. **Generate Reports**: Create reconciliation reports
5. **Import Statements**: Import bank statements

## Next Steps

- [Reconcile Transactions](/bank-reconciliation/reconcile) - Learn how to reconcile
- [Transaction Matching](/bank-reconciliation/matching) - Match transactions
- [Discrepancies](/bank-reconciliation/discrepancies) - Resolve discrepancies
- [Reports](/bank-reconciliation/reports) - Generate reports

