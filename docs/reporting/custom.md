# Custom Reports

The Custom Reports API allows you to create and generate custom financial reports tailored to your specific needs.

## Overview

Custom reports enable you to:
- Define custom report templates
- Select specific data fields and metrics
- Apply custom filters and groupings
- Export reports in multiple formats

## Base Endpoint

```
https://api.aqnt.net/v1/reporting/custom
```

## Create Custom Report Template

Create a new custom report template:

```bash
curl -X POST https://api.aqnt.net/v1/reporting/custom/templates \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Monthly Revenue by Category",
    "description": "Revenue breakdown by product category",
    "type": "revenue",
    "fields": [
      "date",
      "category",
      "amount",
      "quantity"
    ],
    "group_by": ["category"],
    "filters": {
      "date_range": {
        "type": "relative",
        "value": "last_month"
      }
    },
    "format": "json"
  }'
```

Response:

```json
{
  "data": {
    "id": "rpt_1234567890",
    "name": "Monthly Revenue by Category",
    "description": "Revenue breakdown by product category",
    "type": "revenue",
    "fields": ["date", "category", "amount", "quantity"],
    "group_by": ["category"],
    "filters": {
      "date_range": {
        "type": "relative",
        "value": "last_month"
      }
    },
    "format": "json",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/reporting/custom/templates/rpt_1234567890",
    "generate": "https://api.aqnt.net/v1/reporting/custom/templates/rpt_1234567890/generate"
  }
}
```

## Generate Custom Report

Generate a report from a template:

```bash
curl -X POST https://api.aqnt.net/v1/reporting/custom/templates/rpt_1234567890/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "format": "pdf"
  }'
```

## Available Fields

Common fields available for custom reports:

### Financial Fields
- `amount`: Transaction amount
- `revenue`: Total revenue
- `expenses`: Total expenses
- `profit`: Profit amount
- `tax`: Tax amount
- `discount`: Discount amount

### Transaction Fields
- `date`: Transaction date
- `customer_id`: Customer identifier
- `invoice_id`: Invoice identifier
- `payment_method`: Payment method used
- `status`: Transaction status

### Product Fields
- `product_id`: Product identifier
- `category`: Product category
- `quantity`: Quantity sold
- `unit_price`: Unit price

## Grouping Options

Group data by:

- `date`: Group by date
- `week`: Group by week
- `month`: Group by month
- `quarter`: Group by quarter
- `year`: Group by year
- `category`: Group by category
- `customer`: Group by customer
- `product`: Group by product

## Filter Options

Apply filters to your reports:

```json
{
  "filters": {
    "date_range": {
      "type": "absolute",
      "start": "2024-01-01",
      "end": "2024-01-31"
    },
    "amount": {
      "gte": 100,
      "lte": 1000
    },
    "status": ["paid", "pending"],
    "category": ["electronics", "clothing"]
  }
}
```

## Export Formats

Supported export formats:

- `json`: JSON format
- `csv`: CSV format
- `xlsx`: Excel format
- `pdf`: PDF format

## List Report Templates

Get all custom report templates:

```bash
curl -X GET https://api.aqnt.net/v1/reporting/custom/templates \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Get Report Template

Retrieve a specific template:

```bash
curl -X GET https://api.aqnt.net/v1/reporting/custom/templates/rpt_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Update Report Template

Update an existing template:

```bash
curl -X PATCH https://api.aqnt.net/v1/reporting/custom/templates/rpt_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": ["date", "category", "amount", "quantity", "profit"]
  }'
```

## Delete Report Template

Delete a custom report template:

```bash
curl -X DELETE https://api.aqnt.net/v1/reporting/custom/templates/rpt_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Scheduled Reports

Schedule reports to run automatically:

```bash
curl -X POST https://api.aqnt.net/v1/reporting/custom/templates/rpt_1234567890/schedule \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "frequency": "monthly",
    "email_recipients": ["admin@example.com"],
    "format": "pdf"
  }'
```

## Next Steps

- [Profit & Loss](/reporting/profit-loss) - Income statements
- [Balance Sheet](/reporting/balance-sheet) - Financial position
- [Cash Flow](/reporting/cash-flow) - Cash flow statements

