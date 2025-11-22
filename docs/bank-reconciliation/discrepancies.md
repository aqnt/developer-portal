# Reconciliation Discrepancies

Identify and resolve reconciliation discrepancies.

## List Discrepancies

Get discrepancies for a reconciliation.

**Endpoint:** `GET /v1/bank-reconciliation/reconcile/{reconciliation_id}/discrepancies`

**Response:**

```json
{
  "data": [
    {
      "id": "disc_1234567890",
      "type": "amount_mismatch",
      "transaction_id": "txn_1234567890",
      "record_id": "inv_1234567890",
      "bank_amount": 100.00,
      "record_amount": 105.00,
      "difference": 5.00,
      "status": "pending"
    }
  ]
}
```

## Resolve Discrepancy

Resolve a discrepancy.

**Endpoint:** `POST /v1/bank-reconciliation/discrepancies/{discrepancy_id}/resolve`

**Request Body:**

```json
{
  "resolution": "adjust_record",
  "adjusted_amount": 100.00,
  "notes": "Bank amount is correct"
}
```

## Discrepancy Types

- `amount_mismatch`: Amounts don't match
- `missing_transaction`: Transaction not in records
- `duplicate_transaction`: Duplicate transaction
- `date_mismatch`: Dates don't match

