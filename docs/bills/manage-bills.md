# Manage Bills

Create and manage vendor bills.

## Create Bill

Create a new bill.

**Endpoint:** `POST /v1/bills`

**Request Body:**

```json
{
  "vendor_id": "vend_1234567890",
  "bill_number": "BILL-2024-001",
  "issue_date": "2024-01-15",
  "due_date": "2024-02-15",
  "amount": 500.00,
  "currency": "USD",
  "items": [
    {
      "description": "Internet Service",
      "amount": 100.00
    },
    {
      "description": "Phone Service",
      "amount": 50.00
    },
    {
      "description": "Electricity",
      "amount": 350.00
    }
  ],
  "tax_amount": 40.00,
  "total": 540.00,
  "category": "Utilities",
  "notes": "Monthly utilities bill"
}
```

**Response:**

```json
{
  "data": {
    "id": "bill_1234567890",
    "bill_number": "BILL-2024-001",
    "vendor_id": "vend_1234567890",
    "status": "pending",
    "issue_date": "2024-01-15",
    "due_date": "2024-02-15",
    "amount": 500.00,
    "tax_amount": 40.00,
    "total": 540.00,
    "currency": "USD",
    "amount_paid": 0.00,
    "amount_due": 540.00,
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Bill

Retrieve details of a specific bill.

**Endpoint:** `GET /v1/bills/{bill_id}`

## List Bills

Retrieve bills with filtering.

**Endpoint:** `GET /v1/bills`

**Query Parameters:**

- `vendor_id` (string, optional): Filter by vendor
- `status` (string, optional): Filter by status
- `category` (string, optional): Filter by category
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date
- `overdue` (boolean, optional): Show only overdue bills
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

## Update Bill

Update bill details (only draft bills can be updated).

**Endpoint:** `PATCH /v1/bills/{bill_id}`

**Request Body:**

```json
{
  "amount": 550.00,
  "due_date": "2024-02-20",
  "notes": "Updated amount"
}
```

## Delete Bill

Delete a bill (only draft bills can be deleted).

**Endpoint:** `DELETE /v1/bills/{bill_id}`

## Bill Categories

Common bill categories:

- **Utilities**: Electricity, water, gas, internet, phone
- **Rent**: Office rent, facility rent
- **Insurance**: Business insurance, liability insurance
- **Services**: Professional services, maintenance
- **Subscriptions**: Software subscriptions, memberships
- **Supplies**: Office supplies, materials
- **Other**: Miscellaneous bills

## Overdue Bills

Get bills that are past their due date:

**Endpoint:** `GET /v1/bills?overdue=true`

**Response:**

```json
{
  "data": [
    {
      "id": "bill_1234567890",
      "vendor_id": "vend_1234567890",
      "amount": 540.00,
      "due_date": "2024-01-10",
      "days_overdue": 5,
      "status": "overdue"
    }
  ]
}
```

## Attach Document

Attach a document (invoice, receipt) to a bill.

**Endpoint:** `POST /v1/bills/{bill_id}/documents`

**Request:** Multipart form data with document file

**Response:**

```json
{
  "data": {
    "bill_id": "bill_1234567890",
    "document_id": "doc_1234567890",
    "document_url": "https://documents.aqnt.net/doc_1234567890.pdf"
  }
}
```

