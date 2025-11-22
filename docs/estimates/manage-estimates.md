# Manage Estimates

Retrieve, update, and manage your estimates.

## Get Estimate

Retrieve details of a specific estimate.

**Endpoint:** `GET /v1/estimates/{estimate_id}`

**Response:**

```json
{
  "data": {
    "id": "est_1234567890",
    "estimate_number": "EST-2024-001",
    "customer_id": "cust_1234567890",
    "status": "accepted",
    "issue_date": "2024-01-15",
    "valid_until": "2024-02-15",
    "subtotal": 6200.00,
    "tax": 496.00,
    "total": 6696.00,
    "currency": "USD",
    "items": [...],
    "pdf_url": "https://estimates.aqnt.net/est_1234567890.pdf",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## List Estimates

Retrieve a list of estimates with optional filtering.

**Endpoint:** `GET /v1/estimates`

**Query Parameters:**

- `customer_id` (string, optional): Filter by customer
- `status` (string, optional): Filter by status
- `start_date` (string, optional): Start date (ISO 8601)
- `end_date` (string, optional): End date (ISO 8601)
- `limit` (integer, optional): Number of results (default: 20, max: 100)
- `offset` (integer, optional): Pagination offset

## Update Estimate

Update an existing estimate (only draft estimates can be updated).

**Endpoint:** `PATCH /v1/estimates/{estimate_id}`

**Request Body:**

```json
{
  "items": [
    {
      "description": "Updated Service",
      "quantity": 1,
      "unit_price": 5500.00
    }
  ],
  "valid_until": "2024-03-15"
}
```

## Send Estimate

Send an estimate to the customer via email.

**Endpoint:** `POST /v1/estimates/{estimate_id}/send`

**Request Body:**

```json
{
  "email_subject": "Project Estimate #EST-2024-001",
  "email_message": "Please review the attached estimate."
}
```

## Accept/Reject Estimate

Mark estimate as accepted or rejected (typically done by customer, but can be updated via API).

**Endpoint:** `POST /v1/estimates/{estimate_id}/accept`

**Response:**

```json
{
  "data": {
    "id": "est_1234567890",
    "status": "accepted",
    "accepted_at": "2024-01-20T10:30:00Z"
  }
}
```

## Void Estimate

Void (cancel) an estimate.

**Endpoint:** `POST /v1/estimates/{estimate_id}/void`

**Request Body:**

```json
{
  "reason": "Customer cancelled project"
}
```

## Download PDF

Get the PDF URL for an estimate.

**Endpoint:** `GET /v1/estimates/{estimate_id}/pdf`

**Response:**

```json
{
  "data": {
    "pdf_url": "https://estimates.aqnt.net/est_1234567890.pdf",
    "expires_at": "2024-01-22T10:30:00Z"
  }
}
```

## Estimate Status

- `draft`: Estimate is being created
- `sent`: Estimate has been sent to customer
- `viewed`: Customer has viewed the estimate
- `accepted`: Customer has accepted the estimate
- `rejected`: Customer has rejected the estimate
- `expired`: Estimate has passed its validity date
- `converted`: Estimate has been converted to an invoice
- `cancelled`: Estimate has been cancelled

