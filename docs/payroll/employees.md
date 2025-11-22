# Payroll Employees

Manage employee records and information.

## Create Employee

Add a new employee to your payroll system.

**Endpoint:** `POST /v1/payroll/employees`

**Request Body:**

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "employee_id": "EMP-001",
  "hire_date": "2024-01-01",
  "employment_type": "full_time",
  "salary": 60000.00,
  "pay_frequency": "biweekly",
  "tax_info": {
    "filing_status": "single",
    "federal_allowances": 2,
    "state": "CA"
  },
  "payment_method": {
    "type": "direct_deposit",
    "bank_account": {
      "routing_number": "123456789",
      "account_number": "987654321",
      "account_type": "checking"
    }
  },
  "deductions": [
    {
      "type": "health_insurance",
      "amount": 200.00,
      "frequency": "monthly"
    }
  ]
}
```

**Response:**

```json
{
  "data": {
    "id": "emp_1234567890",
    "employee_id": "EMP-001",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "hire_date": "2024-01-01",
    "employment_type": "full_time",
    "salary": 60000.00,
    "pay_frequency": "biweekly",
    "status": "active",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Employee

Retrieve details of a specific employee.

**Endpoint:** `GET /v1/payroll/employees/{employee_id}`

**Response:**

```json
{
  "data": {
    "id": "emp_1234567890",
    "employee_id": "EMP-001",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "hire_date": "2024-01-01",
    "employment_type": "full_time",
    "salary": 60000.00,
    "pay_frequency": "biweekly",
    "status": "active",
    "tax_info": {...},
    "payment_method": {...},
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## List Employees

Retrieve a list of employees.

**Endpoint:** `GET /v1/payroll/employees`

**Query Parameters:**

- `status` (string, optional): Filter by status (`active`, `inactive`, `terminated`)
- `employment_type` (string, optional): Filter by type (`full_time`, `part_time`, `contractor`)
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

## Update Employee

Update employee information.

**Endpoint:** `PATCH /v1/payroll/employees/{employee_id}`

**Request Body:**

```json
{
  "salary": 65000.00,
  "deductions": [
    {
      "type": "health_insurance",
      "amount": 250.00,
      "frequency": "monthly"
    },
    {
      "type": "401k",
      "amount": 500.00,
      "frequency": "monthly"
    }
  ]
}
```

## Terminate Employee

Terminate an employee.

**Endpoint:** `POST /v1/payroll/employees/{employee_id}/terminate`

**Request Body:**

```json
{
  "termination_date": "2024-02-01",
  "reason": "Resignation"
}
```

## Employment Types

- `full_time`: Full-time employee
- `part_time`: Part-time employee
- `contractor`: Independent contractor (1099)
- `intern`: Intern

## Pay Frequencies

- `weekly`: Weekly pay
- `biweekly`: Bi-weekly pay (every 2 weeks)
- `semimonthly`: Semi-monthly pay (twice per month)
- `monthly`: Monthly pay

## Payment Methods

### Direct Deposit

```json
{
  "type": "direct_deposit",
  "bank_account": {
    "routing_number": "123456789",
    "account_number": "987654321",
    "account_type": "checking"
  }
}
```

### Check

```json
{
  "type": "check",
  "mailing_address": {
    "street": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94102"
  }
}
```

