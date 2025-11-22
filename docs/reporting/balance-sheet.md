# Balance Sheet Report

Generate balance sheet (financial position) reports.

## Generate Report

**Endpoint:** `GET /v1/reporting/balance-sheet`

**Query Parameters:**

- `as_of_date` (string, required): As of date
- `format` (string, optional): Format (`json`, `pdf`, `excel`)

**Response:**

```json
{
  "data": {
    "as_of_date": "2024-01-31",
    "assets": {
      "total": 200000.00,
      "current_assets": 50000.00,
      "fixed_assets": 150000.00
    },
    "liabilities": {
      "total": 80000.00,
      "current_liabilities": 30000.00,
      "long_term_liabilities": 50000.00
    },
    "equity": {
      "total": 120000.00
    },
    "report_url": "https://reports.aqnt.net/bs_123.pdf"
  }
}
```

