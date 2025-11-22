# Reconciliation Reports

Generate reconciliation reports.

## Generate Report

**Endpoint:** `GET /v1/bank-reconciliation/reports`

**Query Parameters:**

- `account_id` (string, required): Account ID
- `start_date` (string, required): Start date
- `end_date` (string, required): End date
- `format` (string, optional): Report format (`json`, `pdf`, `csv`)

**Response:**

```json
{
  "data": {
    "account_id": "acc_1234567890",
    "period": "2024-01",
    "starting_balance": 10000.00,
    "ending_balance": 12500.00,
    "total_transactions": 150,
    "matched": 145,
    "unmatched": 5,
    "discrepancies": 2,
    "report_url": "https://reports.aqnt.net/recon_123.pdf"
  }
}
```

