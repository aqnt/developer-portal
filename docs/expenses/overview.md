# Expenses API Overview

The Expenses API allows you to track, claim, and manage business expenses with receipt capture and reimbursement workflows.

## Features

- **Expense Tracking**: Track business expenses in real-time
- **Receipt Capture**: Upload and attach receipts to expenses
- **Expense Claims**: Submit expense claims for approval
- **Reimbursement**: Process expense reimbursements
- **Category Management**: Organize expenses by categories
- **Mileage Tracking**: Track business mileage
- **Multi-currency**: Support for expenses in multiple currencies
- **Tax Deductions**: Identify tax-deductible expenses
- **Approval Workflows**: Set up expense approval processes

## Base Endpoint

```
https://api.aqnt.net/v1/expenses
```

## Key Concepts

### Expenses

An expense represents a business cost. It includes:
- Amount and currency
- Category
- Receipt (optional)
- Date and location
- Tax information
- Reimbursement status

### Expense Claims

An expense claim groups multiple expenses for submission and approval.

### Expense Status

- `draft`: Expense is being created
- `submitted`: Expense claim submitted for approval
- `approved`: Expense approved for reimbursement
- `rejected`: Expense claim rejected
- `reimbursed`: Expense has been reimbursed

## Quick Start

### Create an Expense

```bash
curl -X POST https://api.aqnt.net/v1/expenses \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 45.50,
    "currency": "USD",
    "category": "Travel",
    "description": "Taxi to client meeting",
    "date": "2024-01-15",
    "merchant": "Uber"
  }'
```

## Common Use Cases

1. **Track Expenses**: Record business expenses as they occur
2. **Submit Claims**: Group expenses into claims for approval
3. **Process Reimbursements**: Reimburse approved expenses
4. **Tax Reporting**: Generate expense reports for tax purposes
5. **Budget Tracking**: Monitor spending against budgets

## Next Steps

- [Track Expenses](/expenses/track-expenses) - Create and manage expenses
- [Expense Claims](/expenses/claims) - Submit and manage expense claims
- [Receipts](/expenses/receipts) - Upload and manage receipts
- [Reimbursements](/expenses/reimbursements) - Process reimbursements
- [Categories](/expenses/categories) - Manage expense categories

