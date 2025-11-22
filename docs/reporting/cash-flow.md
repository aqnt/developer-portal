# Cash Flow Report

Generate cash flow statements.

## Generate Report

**Endpoint:** `GET /v1/reporting/cash-flow`

**Query Parameters:**

- `start_date` (string, required): Start date
- `end_date` (string, required): End date
- `format` (string, optional): Format (`json`, `pdf`, `excel`)

**Response:**

```json
{
  "data": {
    "period": {
      "start_date": "2024-01-01",
      "end_date": "2024-01-31"
    },
    "operating_activities": {
      "net_income": 15000.00,
      "adjustments": 5000.00,
      "total": 20000.00
    },
    "investing_activities": {
      "total": -10000.00
    },
    "financing_activities": {
      "total": 5000.00
    },
    "net_cash_flow": 15000.00,
    "report_url": "https://reports.aqnt.net/cf_123.pdf"
  }
}
```

