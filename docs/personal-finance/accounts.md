# Personal Finance Accounts

Manage financial accounts including banks, credit cards, and investments.

## Create Account

Add a new financial account.

**Endpoint:** `POST /v1/personal-finance/accounts`

**Request Body:**

```json
{
  "type": "bank",
  "name": "Chase Checking",
  "institution": "Chase Bank",
  "account_number": "****1234",
  "balance": 5000.00,
  "currency": "USD"
}
```

**Response:**

```json
{
  "data": {
    "id": "acc_1234567890",
    "type": "bank",
    "name": "Chase Checking",
    "institution": "Chase Bank",
    "account_number": "****1234",
    "balance": 5000.00,
    "currency": "USD",
    "status": "active",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Account Types

Supported account types:

- `bank`: Checking or savings account
- `credit_card`: Credit card account
- `investment`: Investment/brokerage account
- `loan`: Loan account (mortgage, auto, etc.)
- `other`: Other account type

## Get Account

Retrieve details of a specific account.

**Endpoint:** `GET /v1/personal-finance/accounts/{account_id}`

**Response:**

```json
{
  "data": {
    "id": "acc_1234567890",
    "type": "bank",
    "name": "Chase Checking",
    "institution": "Chase Bank",
    "balance": 5000.00,
    "currency": "USD",
    "status": "active",
    "last_synced": "2024-01-15T10:30:00Z"
  }
}
```

## List Accounts

Retrieve all accounts.

**Endpoint:** `GET /v1/personal-finance/accounts`

**Query Parameters:**

- `type` (string, optional): Filter by account type
- `status` (string, optional): Filter by status

**Response:**

```json
{
  "data": [
    {
      "id": "acc_1234567890",
      "type": "bank",
      "name": "Chase Checking",
      "balance": 5000.00,
      "status": "active"
    },
    {
      "id": "acc_0987654321",
      "type": "credit_card",
      "name": "Chase Sapphire",
      "balance": -2500.00,
      "status": "active"
    }
  ]
}
```

## Update Account

Update account information.

**Endpoint:** `PATCH /v1/personal-finance/accounts/{account_id}`

**Request Body:**

```json
{
  "name": "Updated Account Name",
  "balance": 5500.00
}
```

## Sync Account

Manually sync account data (for connected accounts).

**Endpoint:** `POST /v1/personal-finance/accounts/{account_id}/sync`

**Response:**

```json
{
  "data": {
    "id": "acc_1234567890",
    "status": "syncing",
    "last_synced": "2024-01-15T10:35:00Z"
  }
}
```

## Connect Bank Account

Connect a bank account via bank integration.

**Endpoint:** `POST /v1/personal-finance/accounts/connect`

**Request Body:**

```json
{
  "institution_id": "chase",
  "credentials": {
    "username": "user@example.com",
    "password": "encrypted_password"
  }
}
```

## Account Status

- `active`: Account is active and syncing
- `inactive`: Account is inactive
- `syncing`: Account is currently syncing
- `error`: Account sync error
- `disconnected`: Account connection lost

