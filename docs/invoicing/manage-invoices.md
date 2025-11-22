# Invoice Management

Retrieve, update, and manage your invoices.

## Get Invoice

Retrieve details of a specific invoice.

**Endpoint:** `GET /v1/invoices/{invoice_id}`

**Response:** `200 OK`

**Response Body:**
```json
{
  "data": {
    "id": "inv_1234567890",
    "invoice_number": "INV-2024-001",
    "customer_id": "cust_1234567890",
    "customer": {
      "id": "cust_1234567890",
      "name": "Acme Corporation",
      "email": "billing@acme.com"
    },
    "status": "paid",
    "issue_date": "2024-01-15",
    "due_date": "2024-02-15",
    "paid_date": "2024-01-20",
    "subtotal": 1700.00,
    "tax": 136.00,
    "discount": 0.00,
    "total": 1836.00,
    "amount_paid": 1836.00,
    "amount_due": 0.00,
    "currency": "USD",
    "items": [...],
    "payments": [
      {
        "id": "pay_1234567890",
        "amount": 1836.00,
        "payment_date": "2024-01-20",
        "payment_method": "bank_transfer"
      }
    ],
    "pdf_url": "https://invoices.aqnt.net/inv_1234567890.pdf",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-20T14:30:00Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/invoices/inv_1234567890",
    "customer": "https://api.aqnt.net/v1/customers/cust_1234567890",
    "payments": "https://api.aqnt.net/v1/invoices/inv_1234567890/payments",
    "pdf": "https://invoices.aqnt.net/inv_1234567890.pdf",
    "send": "https://api.aqnt.net/v1/invoices/inv_1234567890/send",
    "void": "https://api.aqnt.net/v1/invoices/inv_1234567890/void",
    "estimate": "https://api.aqnt.net/v1/estimates/est_1234567890"
  }
}
```

## List Invoices

Retrieve a list of invoices with optional filtering, sorting, and pagination.

**Endpoint:** `GET /v1/invoices`

**Query Parameters:**

- `customer_id` (string, optional): Filter by customer ID
- `status` (string, optional): Filter by status (`draft`, `sent`, `paid`, `overdue`, `cancelled`)
- `filter[amount][gte]` (number, optional): Filter by minimum amount
- `filter[amount][lte]` (number, optional): Filter by maximum amount
- `filter[due_date][gte]` (string, optional): Filter by minimum due date
- `filter[due_date][lte]` (string, optional): Filter by maximum due date
- `sort` (string, optional): Sort field (default: `created_at`)
- `order` (string, optional): Sort order (`asc`, `desc`, default: `desc`)
- `page` (integer, optional): Page number (default: 1)
- `per_page` (integer, optional): Items per page (default: 20, max: 100)
- `fields` (string, optional): Comma-separated list of fields to return

**Example Request:**

```bash
curl -X GET "https://api.aqnt.net/v1/invoices?status=overdue&page=1&per_page=50&sort=due_date&order=asc" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Response:** `200 OK`

**Response Body:**
```json
{
  "data": [
    {
      "id": "inv_1234567890",
      "invoice_number": "INV-2024-001",
      "customer_id": "cust_1234567890",
      "status": "overdue",
      "due_date": "2024-01-10",
      "total": 1836.00,
      "amount_due": 1836.00,
      "currency": "USD",
      "created_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": "inv_0987654321",
      "invoice_number": "INV-2024-002",
      "customer_id": "cust_0987654321",
      "status": "overdue",
      "due_date": "2024-01-12",
      "total": 2500.00,
      "amount_due": 2500.00,
      "currency": "USD",
      "created_at": "2024-01-16T10:30:00Z"
    }
  ],
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1",
    "pagination": {
      "page": 1,
      "per_page": 50,
      "total": 25,
      "total_pages": 1,
      "has_next": false,
      "has_previous": false
    }
  },
  "links": {
    "self": "https://api.aqnt.net/v1/invoices?status=overdue&page=1&per_page=50",
    "first": "https://api.aqnt.net/v1/invoices?status=overdue&page=1&per_page=50",
    "last": "https://api.aqnt.net/v1/invoices?status=overdue&page=1&per_page=50",
    "next": null,
    "prev": null
  }
}
```

## Update Invoice

Update an existing invoice (only draft invoices can be updated).

**Endpoint:** `PATCH /v1/invoices/{invoice_id}`

**Response:** `200 OK`

**Request Body:**

```json
{
  "items": [
    {
      "description": "Updated Service",
      "quantity": 15,
      "unit_price": 150.00
    }
  ],
  "due_date": "2024-03-15"
}
```

## Send Invoice

Send an invoice to the customer via email.

**Endpoint:** `POST /v1/invoices/{invoice_id}/send`

**Response:** `200 OK`

**Request Body:**

```json
{
  "email_subject": "Invoice #INV-2024-001",
  "email_message": "Please find your invoice attached."
}
```

**Response:**

```json
{
  "data": {
    "id": "inv_1234567890",
    "status": "sent",
    "sent_at": "2024-01-15T10:35:00Z"
  }
}
```

## Mark as Paid

Mark an invoice as paid.

**Endpoint:** `POST /v1/invoices/{invoice_id}/payments`

**Response:** `201 Created`

**Request Body:**

```json
{
  "amount": 1836.00,
  "payment_date": "2024-01-20",
  "payment_method": "bank_transfer",
  "reference": "TXN-123456"
}
```

## Void Invoice

Void (cancel) an invoice.

**Endpoint:** `POST /v1/invoices/{invoice_id}/void`

**Response:** `200 OK`

**Request Body:**

```json
{
  "reason": "Customer cancelled order"
}
```

**Response:**

```json
{
  "data": {
    "id": "inv_1234567890",
    "status": "cancelled",
    "voided_at": "2024-01-15T11:00:00Z"
  }
}
```

## Download PDF

Get the PDF URL for an invoice.

**Endpoint:** `GET /v1/invoices/{invoice_id}/pdf`

**Response:** `200 OK`

**Response:**

```json
{
  "data": {
    "pdf_url": "https://invoices.aqnt.net/inv_1234567890.pdf",
    "expires_at": "2024-01-22T10:30:00Z"
  }
}
```

## Invoice Status

- `draft`: Invoice is being created
- `sent`: Invoice has been sent to customer
- `viewed`: Customer has viewed the invoice
- `paid`: Invoice has been paid in full
- `partially_paid`: Invoice has been partially paid
- `overdue`: Invoice is past due date
- `cancelled`: Invoice has been cancelled

