# Profit & Loss Report

Generate profit and loss (income statement) reports.

## Generate Report

**Endpoint:** `GET /v1/reporting/profit-loss`

**Query Parameters:**

- `start_date` (string, required): Start date
- `end_date` (string, required): End date
- `format` (string, optional): Format (`json`, `pdf`, `excel`)
- `currency` (string, optional): Currency code

**Response:**

```json
{
  "data": {
    "period": {
      "start_date": "2024-01-01",
      "end_date": "2024-01-31"
    },
    "revenue": {
      "total": 50000.00,
      "categories": [
        {
          "name": "Sales",
          "amount": 45000.00
        },
        {
          "name": "Services",
          "amount": 5000.00
        }
      ]
    },
    "expenses": {
      "total": 35000.00,
      "categories": [
        {
          "name": "Cost of Goods Sold",
          "amount": 20000.00
        },
        {
          "name": "Operating Expenses",
          "amount": 15000.00
        }
      ]
    },
    "net_income": 15000.00,
    "report_url": "https://reports.aqnt.net/pl_123.pdf"
  }
}
```

