# Track Expenses

Create and manage business expenses.

## Create Expense

Create a new expense.

**Endpoint:** `POST /v1/expenses`

**Request Body:**

```json
{
  "amount": 45.50,
  "currency": "USD",
  "category": "Travel",
  "subcategory": "Transportation",
  "description": "Taxi to client meeting",
  "date": "2024-01-15",
  "merchant": "Uber",
  "location": {
    "address": "123 Main St, San Francisco, CA",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "tax_amount": 4.55,
  "is_tax_deductible": true,
  "employee_id": "emp_1234567890",
  "project_id": "proj_1234567890",
  "receipt_id": "receipt_1234567890"
}
```

**Response:**

```json
{
  "data": {
    "id": "exp_1234567890",
    "amount": 45.50,
    "currency": "USD",
    "category": "Travel",
    "subcategory": "Transportation",
    "description": "Taxi to client meeting",
    "date": "2024-01-15",
    "merchant": "Uber",
    "tax_amount": 4.55,
    "is_tax_deductible": true,
    "status": "draft",
    "employee_id": "emp_1234567890",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Expense

Retrieve details of a specific expense.

**Endpoint:** `GET /v1/expenses/{expense_id}`

## List Expenses

Retrieve expenses with filtering.

**Endpoint:** `GET /v1/expenses`

**Query Parameters:**

- `employee_id` (string, optional): Filter by employee
- `category` (string, optional): Filter by category
- `status` (string, optional): Filter by status
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date
- `is_tax_deductible` (boolean, optional): Filter tax-deductible expenses
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

## Update Expense

Update expense details.

**Endpoint:** `PATCH /v1/expenses/{expense_id}`

**Request Body:**

```json
{
  "amount": 50.00,
  "category": "Meals & Entertainment",
  "description": "Updated description"
}
```

## Delete Expense

Delete an expense (only draft expenses can be deleted).

**Endpoint:** `DELETE /v1/expenses/{expense_id}`

## Expense Categories

Common categories:

- **Travel**: Transportation, hotels, flights
- **Meals & Entertainment**: Business meals, client entertainment
- **Office Supplies**: Stationery, equipment
- **Software & Subscriptions**: SaaS tools, licenses
- **Professional Services**: Legal, consulting
- **Marketing**: Advertising, events
- **Utilities**: Internet, phone, electricity
- **Other**: Miscellaneous expenses

## Mileage Tracking

Track business mileage:

```json
{
  "amount": 0.00,
  "category": "Travel",
  "subcategory": "Mileage",
  "description": "Business trip to client",
  "mileage": {
    "distance_miles": 50,
    "rate_per_mile": 0.655,
    "total": 32.75
  },
  "start_location": "123 Main St",
  "end_location": "456 Oak Ave"
}
```

## Multi-currency Expenses

Record expenses in different currencies:

```json
{
  "amount": 100.00,
  "currency": "EUR",
  "exchange_rate": 1.10,
  "amount_usd": 110.00,
  "category": "Travel"
}
```

## Attach Receipt

Attach a receipt to an expense:

**Endpoint:** `POST /v1/expenses/{expense_id}/receipt`

**Request:** Multipart form data with receipt file

**Response:**

```json
{
  "data": {
    "expense_id": "exp_1234567890",
    "receipt_id": "receipt_1234567890",
    "receipt_url": "https://receipts.aqnt.net/receipt_1234567890.pdf"
  }
}
```

