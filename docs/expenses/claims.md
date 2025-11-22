# Expense Claims

Submit and manage expense claims for approval and reimbursement.

## Create Expense Claim

Create a new expense claim with multiple expenses.

**Endpoint:** `POST /v1/expenses/claims`

**Request Body:**

```json
{
  "employee_id": "emp_1234567890",
  "title": "Q1 Business Travel Expenses",
  "description": "Expenses for client meetings in January",
  "expense_ids": [
    "exp_1234567890",
    "exp_0987654321",
    "exp_1122334455"
  ],
  "total_amount": 1250.00,
  "currency": "USD"
}
```

**Response:**

```json
{
  "data": {
    "id": "claim_1234567890",
    "employee_id": "emp_1234567890",
    "title": "Q1 Business Travel Expenses",
    "status": "submitted",
    "total_amount": 1250.00,
    "currency": "USD",
    "expense_count": 3,
    "submitted_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Expense Claim

Retrieve details of a specific expense claim.

**Endpoint:** `GET /v1/expenses/claims/{claim_id}`

**Response:**

```json
{
  "data": {
    "id": "claim_1234567890",
    "employee_id": "emp_1234567890",
    "title": "Q1 Business Travel Expenses",
    "status": "approved",
    "total_amount": 1250.00,
    "currency": "USD",
    "expenses": [
      {
        "id": "exp_1234567890",
        "amount": 450.00,
        "category": "Travel",
        "description": "Flight to New York"
      }
    ],
    "approver_id": "emp_0987654321",
    "approved_at": "2024-01-16T14:00:00Z",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## List Expense Claims

Retrieve expense claims with filtering.

**Endpoint:** `GET /v1/expenses/claims`

**Query Parameters:**

- `employee_id` (string, optional): Filter by employee
- `status` (string, optional): Filter by status
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

## Submit Expense Claim

Submit a claim for approval.

**Endpoint:** `POST /v1/expenses/claims/{claim_id}/submit`

**Request Body:**

```json
{
  "approver_id": "emp_0987654321",
  "notes": "Please review and approve"
}
```

## Approve Expense Claim

Approve an expense claim.

**Endpoint:** `POST /v1/expenses/claims/{claim_id}/approve`

**Request Body:**

```json
{
  "notes": "Approved for reimbursement"
}
```

**Response:**

```json
{
  "data": {
    "id": "claim_1234567890",
    "status": "approved",
    "approver_id": "emp_0987654321",
    "approved_at": "2024-01-16T14:00:00Z"
  }
}
```

## Reject Expense Claim

Reject an expense claim.

**Endpoint:** `POST /v1/expenses/claims/{claim_id}/reject`

**Request Body:**

```json
{
  "reason": "Missing receipts for expenses over $100",
  "notes": "Please provide receipts and resubmit"
}
```

## Add Expenses to Claim

Add additional expenses to an existing claim.

**Endpoint:** `POST /v1/expenses/claims/{claim_id}/expenses`

**Request Body:**

```json
{
  "expense_ids": [
    "exp_new_123",
    "exp_new_456"
  ]
}
```

## Remove Expense from Claim

Remove an expense from a claim.

**Endpoint:** `DELETE /v1/expenses/claims/{claim_id}/expenses/{expense_id}`

## Expense Claim Status

- `draft`: Claim is being created
- `submitted`: Claim submitted for approval
- `under_review`: Claim is being reviewed
- `approved`: Claim approved for reimbursement
- `rejected`: Claim rejected
- `reimbursed`: Claim has been reimbursed
- `cancelled`: Claim was cancelled

## Approval Workflows

Configure approval workflows for expense claims:

- **Single Approver**: One person approves
- **Multi-level Approval**: Multiple approvers required
- **Amount-based**: Different approvers based on claim amount
- **Category-based**: Different approvers for different categories

