# Personal Finance Budgeting

Create and manage budgets to track spending and achieve financial goals.

## Create Budget

Create a new budget.

**Endpoint:** `POST /v1/personal-finance/budgets`

**Request Body:**

```json
{
  "name": "Monthly Budget",
  "period": "monthly",
  "start_date": "2024-01-01",
  "income": 5000.00,
  "categories": [
    {
      "category": "Food & Dining",
      "limit": 500.00
    },
    {
      "category": "Transportation",
      "limit": 300.00
    },
    {
      "category": "Entertainment",
      "limit": 200.00
    }
  ]
}
```

**Response:**

```json
{
  "data": {
    "id": "budget_1234567890",
    "name": "Monthly Budget",
    "period": "monthly",
    "start_date": "2024-01-01",
    "income": 5000.00,
    "total_budgeted": 1000.00,
    "categories": [
      {
        "category": "Food & Dining",
        "limit": 500.00,
        "spent": 0.00,
        "remaining": 500.00
      }
    ],
    "status": "active",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Budget

Retrieve details of a specific budget.

**Endpoint:** `GET /v1/personal-finance/budgets/{budget_id}`

**Response:**

```json
{
  "data": {
    "id": "budget_1234567890",
    "name": "Monthly Budget",
    "period": "monthly",
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "income": 5000.00,
    "total_budgeted": 1000.00,
    "total_spent": 450.00,
    "total_remaining": 550.00,
    "categories": [
      {
        "category": "Food & Dining",
        "limit": 500.00,
        "spent": 450.00,
        "remaining": 50.00,
        "percentage_used": 90
      }
    ],
    "status": "active"
  }
}
```

## List Budgets

Retrieve all budgets.

**Endpoint:** `GET /v1/personal-finance/budgets`

**Query Parameters:**

- `status` (string, optional): Filter by status
- `period` (string, optional): Filter by period

## Update Budget

Update budget limits or categories.

**Endpoint:** `PATCH /v1/personal-finance/budgets/{budget_id}`

**Request Body:**

```json
{
  "categories": [
    {
      "category": "Food & Dining",
      "limit": 600.00
    }
  ]
}
```

## Budget Periods

- `weekly`: Weekly budget
- `monthly`: Monthly budget
- `yearly`: Annual budget
- `custom`: Custom date range

## Budget Status

Budgets track spending in real-time:

- `active`: Budget is active and tracking
- `completed`: Budget period has ended
- `paused`: Budget is temporarily paused

## Budget Alerts

Set up alerts for budget thresholds:

**Endpoint:** `POST /v1/personal-finance/budgets/{budget_id}/alerts`

**Request Body:**

```json
{
  "threshold": 80,
  "notification_method": "email"
}
```

Alerts trigger when spending reaches:
- 50% of budget
- 80% of budget
- 100% of budget (over budget)

## AI Budget Recommendations

Get AI-powered budget recommendations based on your spending patterns.

**Endpoint:** `GET /v1/personal-finance/budgets/recommendations`

**Response:**

```json
{
  "data": {
    "recommended_income_allocation": {
      "Food & Dining": 15,
      "Transportation": 10,
      "Housing": 30,
      "Savings": 20,
      "Entertainment": 5
    },
    "insights": [
      "You're spending 25% more on dining out than similar users",
      "Consider increasing your savings allocation to 20%"
    ]
  }
}
```

## Budget Reports

Get budget performance reports.

**Endpoint:** `GET /v1/personal-finance/budgets/{budget_id}/report`

**Response:**

```json
{
  "data": {
    "budget_id": "budget_1234567890",
    "period": "2024-01",
    "total_budgeted": 1000.00,
    "total_spent": 950.00,
    "total_remaining": 50.00,
    "categories": [
      {
        "category": "Food & Dining",
        "budgeted": 500.00,
        "spent": 450.00,
        "variance": -50.00
      }
    ],
    "trends": {
      "spending_velocity": "on_track",
      "projected_overspend": false
    }
  }
}
```

