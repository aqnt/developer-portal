# POS Inventory

Manage product inventory, stock levels, and variants.

## Get Inventory

Retrieve current inventory levels for products.

**Endpoint:** `GET /v1/pos/inventory`

**Query Parameters:**

- `location_id` (string, optional): Filter by location
- `product_id` (string, optional): Get specific product
- `low_stock` (boolean, optional): Only show low stock items
- `limit` (integer, optional): Number of results
- `offset` (integer, optional): Pagination offset

**Response:**

```json
{
  "data": [
    {
      "product_id": "prod_1234567890",
      "location_id": "loc_1234567890",
      "sku": "SKU-001",
      "name": "Product Name",
      "quantity": 50,
      "reserved": 5,
      "available": 45,
      "low_stock_threshold": 10,
      "status": "in_stock",
      "last_updated": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "total": 150,
    "has_more": true
  }
}
```

## Update Inventory

Update stock levels for a product.

**Endpoint:** `PATCH /v1/pos/inventory/{product_id}`

**Request Body:**

```json
{
  "location_id": "loc_1234567890",
  "quantity": 100,
  "adjustment_reason": "Stock received from supplier"
}
```

**Response:**

```json
{
  "data": {
    "product_id": "prod_1234567890",
    "location_id": "loc_1234567890",
    "quantity": 100,
    "available": 95,
    "last_updated": "2024-01-15T10:35:00Z"
  }
}
```

## Adjust Inventory

Make inventory adjustments (add or subtract).

**Endpoint:** `POST /v1/pos/inventory/{product_id}/adjust`

**Request Body:**

```json
{
  "location_id": "loc_1234567890",
  "adjustment": -5,
  "reason": "Damaged items",
  "notes": "Items damaged during shipping"
}
```

**Response:**

```json
{
  "data": {
    "product_id": "prod_1234567890",
    "location_id": "loc_1234567890",
    "previous_quantity": 100,
    "adjustment": -5,
    "new_quantity": 95,
    "available": 90,
    "created_at": "2024-01-15T10:40:00Z"
  }
}
```

## Transfer Inventory

Transfer inventory between locations.

**Endpoint:** `POST /v1/pos/inventory/transfer`

**Request Body:**

```json
{
  "product_id": "prod_1234567890",
  "from_location_id": "loc_123",
  "to_location_id": "loc_456",
  "quantity": 10,
  "reason": "Restocking"
}
```

**Response:**

```json
{
  "data": {
    "transfer_id": "transfer_1234567890",
    "product_id": "prod_1234567890",
    "from_location_id": "loc_123",
    "to_location_id": "loc_456",
    "quantity": 10,
    "status": "completed",
    "created_at": "2024-01-15T10:45:00Z"
  }
}
```

## Low Stock Alerts

Get products that are below their low stock threshold.

**Endpoint:** `GET /v1/pos/inventory/low-stock`

**Query Parameters:**

- `location_id` (string, optional): Filter by location

**Response:**

```json
{
  "data": [
    {
      "product_id": "prod_1234567890",
      "name": "Product Name",
      "location_id": "loc_1234567890",
      "quantity": 5,
      "low_stock_threshold": 10,
      "status": "low_stock"
    }
  ]
}
```

## Inventory Status

Products can have the following inventory statuses:

- `in_stock`: Sufficient stock available
- `low_stock`: Below low stock threshold
- `out_of_stock`: No stock available
- `discontinued`: Product no longer available

