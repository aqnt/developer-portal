# Transaction Matching

Match bank transactions to accounting records.

## Match Transaction

Manually match a bank transaction to a record.

**Endpoint:** `POST /v1/bank-reconciliation/match`

**Request Body:**

```json
{
  "transaction_id": "txn_1234567890",
  "match_type": "invoice",
  "record_id": "inv_1234567890",
  "match_confidence": 0.95
}
```

**Response:**

```json
{
  "data": {
    "id": "match_1234567890",
    "transaction_id": "txn_1234567890",
    "record_id": "inv_1234567890",
    "match_type": "invoice",
    "status": "matched",
    "matched_at": "2024-02-01T10:30:00Z"
  }
}
```

## Match Types

Supported match types:

- `invoice`: Match to invoice payment
- `bill`: Match to bill payment
- `expense`: Match to expense
- `transfer`: Match to account transfer
- `other`: Other transaction type

## Auto-match Suggestions

Get AI-powered matching suggestions.

**Endpoint:** `GET /v1/bank-reconciliation/transactions/{transaction_id}/suggestions`

**Response:**

```json
{
  "data": {
    "transaction_id": "txn_1234567890",
    "suggestions": [
      {
        "record_id": "inv_1234567890",
        "record_type": "invoice",
        "match_confidence": 0.95,
        "match_reasons": [
          "Amount matches exactly",
          "Date within 2 days",
          "Description similarity: 85%"
        ]
      }
    ]
  }
}
```

## Unmatch Transaction

Remove a match from a transaction.

**Endpoint:** `POST /v1/bank-reconciliation/match/{match_id}/unmatch`

## Bulk Match

Match multiple transactions at once.

**Endpoint:** `POST /v1/bank-reconciliation/match-bulk`

**Request Body:**

```json
{
  "matches": [
    {
      "transaction_id": "txn_1234567890",
      "record_id": "inv_1234567890",
      "match_type": "invoice"
    },
    {
      "transaction_id": "txn_0987654321",
      "record_id": "bill_1234567890",
      "match_type": "bill"
    }
  ]
}
```

## Match Rules

Configure matching rules for automatic matching:

```json
{
  "match_rules": {
    "amount_tolerance": 0.01,
    "date_tolerance_days": 3,
    "description_similarity_threshold": 0.8,
    "auto_match_invoices": true,
    "auto_match_bills": true,
    "auto_match_expenses": true
  }
}
```

## Match Confidence

Match confidence scores:

- `0.9 - 1.0`: High confidence (auto-matched)
- `0.7 - 0.9`: Medium confidence (review recommended)
- `0.0 - 0.7`: Low confidence (manual review required)

