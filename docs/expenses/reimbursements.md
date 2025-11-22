# Expense Reimbursements

Process reimbursements for approved expense claims.

## Create Reimbursement

Create a reimbursement for an approved expense claim.

**Endpoint:** `POST /v1/expenses/reimbursements`

**Request Body:**

```json
{
  "claim_id": "claim_1234567890",
  "employee_id": "emp_1234567890",
  "amount": 1250.00,
  "currency": "USD",
  "payment_method": "direct_deposit",
  "payment_method_id": "pm_1234567890",
  "notes": "Reimbursement for Q1 travel expenses"
}
```

**Response:**

```json
{
  "data": {
    "id": "reimb_1234567890",
    "claim_id": "claim_1234567890",
    "employee_id": "emp_1234567890",
    "amount": 1250.00,
    "currency": "USD",
    "status": "pending",
    "payment_method": "direct_deposit",
    "created_at": "2024-01-17T10:30:00Z"
  }
}
```

## Get Reimbursement

Retrieve details of a specific reimbursement.

**Endpoint:** `GET /v1/expenses/reimbursements/{reimbursement_id}`

## List Reimbursements

Retrieve reimbursements with filtering.

**Endpoint:** `GET /v1/expenses/reimbursements`

**Query Parameters:**

- `employee_id` (string, optional): Filter by employee
- `status` (string, optional): Filter by status
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date

## Process Reimbursement

Process a pending reimbursement.

**Endpoint:** `POST /v1/expenses/reimbursements/{reimbursement_id}/process`

**Response:**

```json
{
  "data": {
    "id": "reimb_1234567890",
    "status": "processed",
    "processed_at": "2024-01-17T14:00:00Z",
    "payment_id": "pay_1234567890"
  }
}
```

## Reimbursement Status

- `pending`: Reimbursement is pending processing
- `processing`: Reimbursement is being processed
- `processed`: Reimbursement processed successfully
- `failed`: Reimbursement processing failed
- `cancelled`: Reimbursement was cancelled

## Payment Methods

Supported reimbursement payment methods:

- **Direct Deposit**: Bank transfer
- **Check**: Physical check
- **PayPal**: PayPal transfer
- **Other**: Custom payment method

## Reimbursement History

Get reimbursement history for an employee.

**Endpoint:** `GET /v1/expenses/reimbursements/history`

**Query Parameters:**

- `employee_id` (string, required): Employee ID
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date

**Response:**

```json
{
  "data": [
    {
      "id": "reimb_1234567890",
      "amount": 1250.00,
      "status": "processed",
      "processed_at": "2024-01-17T14:00:00Z"
    }
  ],
  "total_amount": 1250.00,
  "total_count": 1
}
```

## Cancel Reimbursement

Cancel a pending reimbursement.

**Endpoint:** `POST /v1/expenses/reimbursements/{reimbursement_id}/cancel`

**Request Body:**

```json
{
  "reason": "Employee requested cancellation"
}
```

