# Purchase Order Receiving

Track received items against purchase orders.

## Record Receipt

Record received items for a purchase order.

**Endpoint:** `POST /v1/purchase-orders/{purchase_order_id}/receiving`

**Request Body:**

```json
{
  "items": [
    {
      "item_id": "item_1234567890",
      "quantity_received": 10,
      "received_date": "2024-02-10",
      "condition": "good",
      "notes": "All items in good condition"
    },
    {
      "item_id": "item_0987654321",
      "quantity_received": 5,
      "received_date": "2024-02-10",
      "condition": "good"
    }
  ],
  "received_by": "emp_1234567890",
  "notes": "Partial delivery received"
}
```

**Response:**

```json
{
  "data": {
    "id": "receipt_1234567890",
    "purchase_order_id": "po_1234567890",
    "status": "partial",
    "items_received": [
      {
        "item_id": "item_1234567890",
        "quantity_ordered": 10,
        "quantity_received": 10,
        "status": "complete"
      },
      {
        "item_id": "item_0987654321",
        "quantity_ordered": 5,
        "quantity_received": 5,
        "status": "complete"
      }
    ],
    "received_at": "2024-02-10T14:30:00Z"
  }
}
```

## Get Receipt

Retrieve details of a specific receipt.

**Endpoint:** `GET /v1/purchase-orders/receiving/{receipt_id}`

## List Receipts

Retrieve receipts for a purchase order.

**Endpoint:** `GET /v1/purchase-orders/{purchase_order_id}/receiving`

## Update Receipt

Update receipt information.

**Endpoint:** `PATCH /v1/purchase-orders/receiving/{receipt_id}`

**Request Body:**

```json
{
  "quantity_received": 12,
  "condition": "damaged",
  "notes": "Two items damaged during shipping"
}
```

## Item Condition

Items can have the following conditions:

- `good`: Items in good condition
- `damaged`: Items damaged
- `missing`: Items missing
- `wrong_item`: Wrong item received

## Partial Receiving

You can receive items in multiple shipments:

```json
{
  "items": [
    {
      "item_id": "item_123",
      "quantity_received": 5,
      "received_date": "2024-02-10"
    }
  ],
  "notes": "First shipment - remaining items to follow"
}
```

## Complete Receiving

Mark all items as received:

**Endpoint:** `POST /v1/purchase-orders/{purchase_order_id}/receiving/complete`

**Response:**

```json
{
  "data": {
    "purchase_order_id": "po_1234567890",
    "status": "received",
    "all_items_received": true,
    "completed_at": "2024-02-15T10:00:00Z"
  }
}
```

## Receiving Status

- `pending`: Items not yet received
- `partial`: Some items received
- `complete`: All items received
- `over_received`: More items received than ordered

