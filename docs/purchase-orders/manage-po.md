# Manage Purchase Orders

Retrieve, update, and manage purchase orders.

## Get Purchase Order

Retrieve details of a specific purchase order.

**Endpoint:** `GET /v1/purchase-orders/{purchase_order_id}`

**Response:**

```json
{
  "data": {
    "id": "po_1234567890",
    "po_number": "PO-2024-001",
    "vendor_id": "vend_1234567890",
    "status": "approved",
    "issue_date": "2024-01-15",
    "delivery_date": "2024-02-15",
    "subtotal": 3000.00,
    "tax": 240.00,
    "total": 3240.00,
    "currency": "USD",
    "items": [...],
    "received_items": [
      {
        "item_id": "item_123",
        "quantity_received": 10,
        "received_date": "2024-02-10"
      }
    ],
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## List Purchase Orders

Retrieve purchase orders with filtering.

**Endpoint:** `GET /v1/purchase-orders`

**Query Parameters:**

- `vendor_id` (string, optional): Filter by vendor
- `status` (string, optional): Filter by status
- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

## Update Purchase Order

Update purchase order details (only draft POs can be updated).

**Endpoint:** `PATCH /v1/purchase-orders/{purchase_order_id}`

**Request Body:**

```json
{
  "items": [
    {
      "description": "Updated Item",
      "quantity": 15,
      "unit_price": 150.00
    }
  ],
  "delivery_date": "2024-03-15"
}
```

## Submit for Approval

Submit a purchase order for approval.

**Endpoint:** `POST /v1/purchase-orders/{purchase_order_id}/submit`

**Request Body:**

```json
{
  "approver_id": "emp_0987654321",
  "notes": "Please review and approve"
}
```

## Approve Purchase Order

Approve a purchase order.

**Endpoint:** `POST /v1/purchase-orders/{purchase_order_id}/approve`

**Request Body:**

```json
{
  "notes": "Approved for ordering"
}
```

## Reject Purchase Order

Reject a purchase order.

**Endpoint:** `POST /v1/purchase-orders/{purchase_order_id}/reject`

**Request Body:**

```json
{
  "reason": "Budget exceeded",
  "notes": "Please revise the order"
}
```

## Send to Vendor

Send approved purchase order to vendor.

**Endpoint:** `POST /v1/purchase-orders/{purchase_order_id}/send`

**Request Body:**

```json
{
  "send_email": true,
  "email_subject": "Purchase Order #PO-2024-001"
}
```

## Cancel Purchase Order

Cancel a purchase order.

**Endpoint:** `POST /v1/purchase-orders/{purchase_order_id}/cancel`

**Request Body:**

```json
{
  "reason": "Order no longer needed"
}
```

## Close Purchase Order

Close a completed purchase order.

**Endpoint:** `POST /v1/purchase-orders/{purchase_order_id}/close`

