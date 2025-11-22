# Financial Reporting API Overview

The Financial Reporting API provides comprehensive financial reports and analytics for your business.

## Features

- **Profit & Loss**: Income statement reports
- **Balance Sheet**: Financial position reports
- **Cash Flow**: Cash flow statements
- **Custom Reports**: Create custom financial reports
- **Export Formats**: PDF, Excel, CSV exports
- **Date Ranges**: Flexible date range selection
- **Multi-currency**: Reports in multiple currencies
- **Comparative Analysis**: Compare periods

## Base Endpoint

```
https://api.aqnt.net/v1/reporting
```

## Quick Start

### Generate Profit & Loss Report

```bash
curl -X GET "https://api.aqnt.net/v1/reporting/profit-loss?start_date=2024-01-01&end_date=2024-01-31" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Next Steps

- [Profit & Loss](/reporting/profit-loss) - Income statements
- [Balance Sheet](/reporting/balance-sheet) - Financial position
- [Cash Flow](/reporting/cash-flow) - Cash flow statements
- [Custom Reports](/reporting/custom) - Create custom reports

