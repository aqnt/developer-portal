# Reconcile Transactions

Reconcile bank transactions with accounting records.

## Start Reconciliation

Start a reconciliation process for an account.

**Endpoint:** `POST /v1/bank-reconciliation/reconcile`

**Request Body:**

```json
{
  "account_id": "acc_1234567890",
  "start_date": "2024-01-01",
  "end_date": "2024-01-31",
  "auto_match": true
}
```

**Response:**

```json
{
  "data": {
    "id": "recon_1234567890",
    "account_id": "acc_1234567890",
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "status": "processing",
    "total_transactions": 150,
    "matched": 0,
    "unmatched": 150,
    "created_at": "2024-02-01T10:30:00Z"
  }
}
```

## Get Reconciliation

Retrieve details of a reconciliation.

**Endpoint:** `GET /v1/bank-reconciliation/reconcile/{reconciliation_id}`

**Response:**

```json
{
  "data": {
    "id": "recon_1234567890",
    "account_id": "acc_1234567890",
    "status": "completed",
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "total_transactions": 150,
    "matched": 145,
    "unmatched": 5,
    "discrepancies": 2,
    "completed_at": "2024-02-01T10:35:00Z"
  }
}
```

## List Reconciliations

Retrieve reconciliation history.

**Endpoint:** `GET /v1/bank-reconciliation/reconcile`

**Query Parameters:**

- `account_id` (string, optional): Filter by account
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date

## Auto-match Transactions

Enable automatic matching of transactions:

```json
{
  "auto_match": true,
  "match_rules": {
    "match_by_amount": true,
    "match_by_date": true,
    "date_tolerance_days": 3,
    "amount_tolerance": 0.01
  }
}
```

## Complete Reconciliation

Mark reconciliation as complete.

**Endpoint:** `POST /v1/bank-reconciliation/reconcile/{reconciliation_id}/complete`

**Request Body:**

```json
{
  "notes": "Reconciliation completed successfully"
}
```

## Reconciliation Status

- `pending`: Reconciliation pending
- `processing`: Reconciliation in progress
- `completed`: Reconciliation completed
- `discrepancy`: Discrepancies found
- `cancelled`: Reconciliation cancelled

