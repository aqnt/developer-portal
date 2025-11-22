# Purchase Order Vendors

Manage vendor information and relationships.

## Create Vendor

Add a new vendor.

**Endpoint:** `POST /v1/purchase-orders/vendors`

**Request Body:**

```json
{
  "name": "Office Supplies Co",
  "vendor_code": "VEND-001",
  "contact_person": "John Smith",
  "email": "john@officesupplies.com",
  "phone": "+1-555-0123",
  "address": {
    "street": "456 Vendor St",
    "city": "New York",
    "state": "NY",
    "postal_code": "10001",
    "country": "US"
  },
  "payment_terms": "Net 30",
  "tax_id": "12-3456789",
  "currency": "USD"
}
```

**Response:**

```json
{
  "data": {
    "id": "vend_1234567890",
    "name": "Office Supplies Co",
    "vendor_code": "VEND-001",
    "contact_person": "John Smith",
    "email": "john@officesupplies.com",
    "phone": "+1-555-0123",
    "status": "active",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Get Vendor

Retrieve details of a specific vendor.

**Endpoint:** `GET /v1/purchase-orders/vendors/{vendor_id}`

## List Vendors

Retrieve all vendors.

**Endpoint:** `GET /v1/purchase-orders/vendors`

**Query Parameters:**

- `status` (string, optional): Filter by status
- `search` (string, optional): Search by name or code

## Update Vendor

Update vendor information.

**Endpoint:** `PATCH /v1/purchase-orders/vendors/{vendor_id}`

**Request Body:**

```json
{
  "contact_person": "Jane Doe",
  "email": "jane@officesupplies.com",
  "payment_terms": "Net 45"
}
```

## Deactivate Vendor

Deactivate a vendor.

**Endpoint:** `POST /v1/purchase-orders/vendors/{vendor_id}/deactivate`

## Vendor Status

- `active`: Vendor is active
- `inactive`: Vendor is inactive
- `suspended`: Vendor is suspended

## Vendor Performance

Get vendor performance metrics.

**Endpoint:** `GET /v1/purchase-orders/vendors/{vendor_id}/performance`

**Response:**

```json
{
  "data": {
    "vendor_id": "vend_1234567890",
    "total_orders": 25,
    "total_amount": 50000.00,
    "average_delivery_time": 7,
    "on_time_delivery_rate": 96.0,
    "quality_rating": 4.5
  }
}
```

