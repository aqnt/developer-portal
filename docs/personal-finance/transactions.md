# Personal Finance Transactions

Track and manage financial transactions across all accounts.

## Get Transaction

Retrieve details of a specific transaction.

**Endpoint:** `GET /v1/personal-finance/transactions/{transaction_id}`

**Response:**

```json
{
  "data": {
    "id": "txn_1234567890",
    "account_id": "acc_1234567890",
    "date": "2024-01-15",
    "amount": -45.50,
    "description": "Starbucks Coffee",
    "category": "Food & Dining",
    "subcategory": "Coffee Shops",
    "merchant": "Starbucks",
    "tags": ["coffee", "breakfast"],
    "type": "expense",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## List Transactions

Retrieve transactions with filtering and pagination.

**Endpoint:** `GET /v1/personal-finance/transactions`

**Query Parameters:**

- `account_id` (string, optional): Filter by account
- `category` (string, optional): Filter by category
- `start_date` (string, optional): Start date (ISO 8601)
- `end_date` (string, optional): End date (ISO 8601)
- `type` (string, optional): Filter by type (`income`, `expense`, `transfer`)
- `min_amount` (number, optional): Minimum amount
- `max_amount` (number, optional): Maximum amount
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

**Example:**

```bash
curl -X GET "https://api.aqnt.net/v1/personal-finance/transactions?category=Food%20%26%20Dining&start_date=2024-01-01" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Create Transaction

Manually add a transaction.

**Endpoint:** `POST /v1/personal-finance/transactions`

**Request Body:**

```json
{
  "account_id": "acc_1234567890",
  "date": "2024-01-15",
  "amount": -45.50,
  "description": "Grocery Shopping",
  "category": "Food & Dining",
  "subcategory": "Groceries",
  "merchant": "Whole Foods",
  "tags": ["groceries"]
}
```

## Update Transaction

Update transaction details (category, tags, etc.).

**Endpoint:** `PATCH /v1/personal-finance/transactions/{transaction_id}`

**Request Body:**

```json
{
  "category": "Food & Dining",
  "subcategory": "Groceries",
  "tags": ["groceries", "weekly-shopping"]
}
```

## Transaction Categories

Common categories include:

- **Food & Dining**: Restaurants, groceries, coffee
- **Transportation**: Gas, public transit, rideshare
- **Shopping**: Retail purchases
- **Bills & Utilities**: Rent, electricity, internet
- **Entertainment**: Movies, concerts, subscriptions
- **Health & Fitness**: Gym, medical, pharmacy
- **Travel**: Hotels, flights, vacation
- **Income**: Salary, freelance, investments
- **Transfer**: Account transfers

## AI Categorization

Transactions are automatically categorized using AI. You can:

- Review and correct categories
- Train the AI by updating categories
- Set category rules for specific merchants

## Transaction Types

- `income`: Money coming in
- `expense`: Money going out
- `transfer`: Money moving between accounts

## Tags

Use tags to organize transactions:

```json
{
  "tags": ["business", "tax-deductible", "q1-2024"]
}
```

## Search Transactions

Search transactions by description, merchant, or notes.

**Endpoint:** `GET /v1/personal-finance/transactions/search`

**Query Parameters:**

- `q` (string, required): Search query
- `account_id` (string, optional): Filter by account

