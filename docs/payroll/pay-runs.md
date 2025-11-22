# Payroll Pay Runs

Process payroll for employees and generate pay stubs.

## Create Pay Run

Create a new pay run for one or more employees.

**Endpoint:** `POST /v1/payroll/pay-runs`

**Request Body:**

```json
{
  "pay_period_start": "2024-01-01",
  "pay_period_end": "2024-01-15",
  "pay_date": "2024-01-20",
  "employees": [
    {
      "employee_id": "emp_1234567890",
      "hours": 80,
      "overtime_hours": 0,
      "bonus": 500.00,
      "deductions": [
        {
          "type": "health_insurance",
          "amount": 200.00
        }
      ]
    }
  ]
}
```

**Response:**

```json
{
  "data": {
    "id": "payrun_1234567890",
    "pay_period_start": "2024-01-01",
    "pay_period_end": "2024-01-15",
    "pay_date": "2024-01-20",
    "status": "pending",
    "employees": [
      {
        "employee_id": "emp_1234567890",
        "gross_pay": 2307.69,
        "deductions": 200.00,
        "taxes": 450.00,
        "net_pay": 1657.69
      }
    ],
    "total_gross": 2307.69,
    "total_taxes": 450.00,
    "total_net": 1657.69,
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Process Pay Run

Process a pay run (calculate taxes and generate pay stubs).

**Endpoint:** `POST /v1/payroll/pay-runs/{pay_run_id}/process`

**Response:**

```json
{
  "data": {
    "id": "payrun_1234567890",
    "status": "processed",
    "processed_at": "2024-01-15T10:35:00Z",
    "pay_stubs": [
      {
        "employee_id": "emp_1234567890",
        "pay_stub_url": "https://paystubs.aqnt.net/paystub_123.pdf"
      }
    ]
  }
}
```

## Get Pay Run

Retrieve details of a specific pay run.

**Endpoint:** `GET /v1/payroll/pay-runs/{pay_run_id}`

## List Pay Runs

Retrieve a list of pay runs.

**Endpoint:** `GET /v1/payroll/pay-runs`

**Query Parameters:**

- `start_date` (string, optional): Filter by start date
- `end_date` (string, optional): Filter by end date
- `status` (string, optional): Filter by status
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

## Pay Run Status

- `draft`: Pay run is being created
- `pending`: Pay run is ready to process
- `processed`: Pay run has been processed
- `paid`: Payments have been issued
- `cancelled`: Pay run has been cancelled

## Automatic Tax Calculation

The system automatically calculates:

- **Federal Income Tax**: Based on W-4 information
- **State Income Tax**: Based on employee's state
- **Social Security (FICA)**: 6.2% of gross pay (up to wage base)
- **Medicare**: 1.45% of gross pay
- **Additional Medicare**: 0.9% on earnings over threshold
- **State Disability Insurance (SDI)**: Where applicable
- **Unemployment Insurance**: Employer-paid
- **Workers' Compensation**: Employer-paid

## Generate Pay Stubs

Pay stubs are automatically generated when a pay run is processed. Each employee receives:

- Gross pay breakdown
- Deductions
- Tax withholdings
- Net pay
- Year-to-date totals

## Direct Deposit Processing

For employees with direct deposit configured, payments are processed automatically when the pay run status is set to `paid`.

