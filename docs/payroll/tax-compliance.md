# Payroll Tax Compliance

Handle tax calculations, reporting, and compliance.

## Tax Calculations

Taxes are automatically calculated based on:
- Employee W-4 information
- State tax tables
- Local tax requirements
- Current tax rates

## Federal Taxes

### Income Tax

Calculated based on:
- Filing status (single, married, etc.)
- Number of allowances
- Tax brackets

### Social Security (FICA)

- Rate: 6.2% of gross pay
- Wage base limit: Updated annually
- Split: Employee and employer each pay 6.2%

### Medicare

- Rate: 1.45% of gross pay
- Additional Medicare: 0.9% on earnings over threshold
- Split: Employee and employer each pay 1.45%

## State Taxes

State income tax varies by state. The system supports all 50 states plus DC.

### States with No Income Tax

- Alaska
- Florida
- Nevada
- New Hampshire
- South Dakota
- Tennessee
- Texas
- Washington
- Wyoming

## Tax Forms

### W-2 Forms

Generate W-2 forms for employees.

**Endpoint:** `GET /v1/payroll/tax-forms/w2/{year}`

**Query Parameters:**

- `employee_id` (string, optional): Filter by employee

**Response:**

```json
{
  "data": [
    {
      "employee_id": "emp_1234567890",
      "year": 2024,
      "w2_url": "https://taxforms.aqnt.net/w2_123.pdf"
    }
  ]
}
```

### 1099 Forms

Generate 1099 forms for contractors.

**Endpoint:** `GET /v1/payroll/tax-forms/1099/{year}`

## Quarterly Tax Reports

Generate quarterly tax reports for federal and state taxes.

**Endpoint:** `GET /v1/payroll/tax-reports/quarterly`

**Query Parameters:**

- `year` (integer, required): Tax year
- `quarter` (integer, required): Quarter (1-4)

**Response:**

```json
{
  "data": {
    "year": 2024,
    "quarter": 1,
    "federal_taxes": {
      "income_tax_withheld": 15000.00,
      "social_security": 12000.00,
      "medicare": 2800.00
    },
    "state_taxes": {
      "income_tax_withheld": 5000.00
    },
    "report_url": "https://taxforms.aqnt.net/quarterly_2024_q1.pdf"
  }
}
```

## Tax Filing

### Federal Tax Filing

File federal taxes electronically.

**Endpoint:** `POST /v1/payroll/tax-filing/federal`

**Request Body:**

```json
{
  "year": 2024,
  "quarter": 1,
  "filing_type": "941"
}
```

### State Tax Filing

File state taxes.

**Endpoint:** `POST /v1/payroll/tax-filing/state`

**Request Body:**

```json
{
  "year": 2024,
  "quarter": 1,
  "state": "CA",
  "filing_type": "DE6"
}
```

## Tax Compliance Features

- **Automatic Updates**: Tax rates and tables updated automatically
- **Multi-state Support**: Handle employees in multiple states
- **Local Taxes**: Support for local tax jurisdictions
- **Year-end Reporting**: Automatic W-2 and 1099 generation
- **Electronic Filing**: E-file support for federal and state taxes

## Important Dates

- **Quarterly Reports**: Due by the last day of the month following the quarter
- **W-2 Forms**: Must be provided to employees by January 31
- **1099 Forms**: Must be provided to contractors by January 31
- **Federal Filing**: Quarterly (Form 941) or annually (Form 944)

