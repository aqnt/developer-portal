# Expense Receipts

Upload, manage, and process receipts for expenses.

## Upload Receipt

Upload a receipt file.

**Endpoint:** `POST /v1/expenses/receipts`

**Request:** Multipart form data

**Form Fields:**
- `file` (file, required): Receipt image or PDF
- `expense_id` (string, optional): Attach to existing expense
- `merchant` (string, optional): Merchant name
- `amount` (number, optional): Amount from receipt
- `date` (string, optional): Date from receipt

**Response:**

```json
{
  "data": {
    "id": "receipt_1234567890",
    "expense_id": "exp_1234567890",
    "file_url": "https://receipts.aqnt.net/receipt_1234567890.pdf",
    "thumbnail_url": "https://receipts.aqnt.net/receipt_1234567890_thumb.jpg",
    "merchant": "Starbucks",
    "amount": 5.50,
    "date": "2024-01-15",
    "extracted_data": {
      "total": 5.50,
      "tax": 0.44,
      "items": ["Coffee", "Pastry"]
    },
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Receipt

Retrieve receipt details.

**Endpoint:** `GET /v1/expenses/receipts/{receipt_id}`

## List Receipts

Retrieve receipts with filtering.

**Endpoint:** `GET /v1/expenses/receipts`

**Query Parameters:**

- `expense_id` (string, optional): Filter by expense
- `merchant` (string, optional): Filter by merchant
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date

## Receipt OCR

Receipts are automatically processed using OCR to extract:
- Merchant name
- Date
- Amount
- Tax amount
- Line items
- Payment method

## Update Receipt

Update receipt information.

**Endpoint:** `PATCH /v1/expenses/receipts/{receipt_id}`

**Request Body:**

```json
{
  "merchant": "Updated Merchant Name",
  "amount": 6.00,
  "date": "2024-01-16"
}
```

## Delete Receipt

Delete a receipt.

**Endpoint:** `DELETE /v1/expenses/receipts/{receipt_id}`

## Receipt File Formats

Supported formats:
- **Images**: JPEG, PNG, GIF, WebP
- **PDF**: PDF documents
- **Max Size**: 10MB per file

## Receipt Validation

Receipts are validated for:
- Legibility
- Required information (merchant, date, amount)
- Duplicate detection

## Attach Receipt to Expense

Attach an existing receipt to an expense.

**Endpoint:** `POST /v1/expenses/{expense_id}/receipts/{receipt_id}/attach`

