# Payroll API Overview

The Payroll API allows you to manage employees, process payroll, and handle tax compliance.

## Features

- **Employee Management**: Add and manage employee information
- **Pay Runs**: Process payroll for employees
- **Tax Calculations**: Automatic tax calculations and compliance
- **Direct Deposit**: Process direct deposits
- **Pay Stubs**: Generate pay stubs automatically
- **Tax Forms**: Generate W-2, 1099, and other tax forms
- **Time Tracking**: Integrate with time tracking systems
- **Benefits Management**: Manage employee benefits and deductions

## Base Endpoint

```
https://api.aqnt.net/v1/payroll
```

## Key Concepts

### Employees

An employee represents a worker in your organization. Employee records include:
- Personal information
- Employment details
- Tax information
- Payment preferences
- Benefits and deductions

### Pay Runs

A pay run processes payroll for one or more employees for a specific pay period. It includes:
- Hours worked
- Gross pay
- Deductions
- Taxes
- Net pay

### Tax Compliance

The system automatically calculates:
- Federal income tax
- State income tax
- Social Security (FICA)
- Medicare
- Unemployment insurance
- Workers' compensation

## Quick Start

### Create an Employee

```bash
curl -X POST https://api.aqnt.net/v1/payroll/employees \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "employee_id": "EMP-001",
    "hire_date": "2024-01-01",
    "salary": 60000.00,
    "pay_frequency": "biweekly"
  }'
```

## Common Use Cases

1. **Add Employees**: Onboard new employees
2. **Process Payroll**: Run payroll for pay periods
3. **Calculate Taxes**: Automatic tax calculations
4. **Generate Pay Stubs**: Create pay stubs for employees
5. **Tax Reporting**: Generate tax forms (W-2, 1099)

## Next Steps

- [Employees](/payroll/employees) - Manage employee records
- [Pay Runs](/payroll/pay-runs) - Process payroll
- [Tax Compliance](/payroll/tax-compliance) - Handle tax calculations and reporting

