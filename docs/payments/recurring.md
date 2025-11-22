# Recurring Payments

Set up and manage recurring payments and subscriptions.

## Create Subscription

Create a recurring payment subscription.

**Endpoint:** `POST /v1/payments/subscriptions`

**Request Body:**

```json
{
  "customer_id": "cust_1234567890",
  "payment_method_id": "pm_1234567890",
  "amount": 99.00,
  "currency": "USD",
  "interval": "month",
  "interval_count": 1,
  "start_date": "2024-02-01",
  "description": "Monthly subscription",
  "metadata": {
    "plan_id": "plan_pro"
  }
}
```

**Response:**

```json
{
  "data": {
    "id": "sub_1234567890",
    "customer_id": "cust_1234567890",
    "status": "active",
    "amount": 99.00,
    "currency": "USD",
    "interval": "month",
    "interval_count": 1,
    "current_period_start": "2024-02-01",
    "current_period_end": "2024-03-01",
    "next_payment_date": "2024-03-01",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Subscription Intervals

- `day`: Daily
- `week`: Weekly
- `month`: Monthly
- `year`: Yearly

## Get Subscription

Retrieve details of a specific subscription.

**Endpoint:** `GET /v1/payments/subscriptions/{subscription_id}`

## List Subscriptions

Retrieve all subscriptions.

**Endpoint:** `GET /v1/payments/subscriptions`

**Query Parameters:**

- `customer_id` (string, optional): Filter by customer
- `status` (string, optional): Filter by status

## Update Subscription

Update subscription details.

**Endpoint:** `PATCH /v1/payments/subscriptions/{subscription_id}`

**Request Body:**

```json
{
  "amount": 149.00,
  "interval": "month",
  "payment_method_id": "pm_new_123"
}
```

## Cancel Subscription

Cancel an active subscription.

**Endpoint:** `POST /v1/payments/subscriptions/{subscription_id}/cancel`

**Request Body:**

```json
{
  "cancel_at_period_end": true,
  "reason": "Customer requested cancellation"
}
```

**Response:**

```json
{
  "data": {
    "id": "sub_1234567890",
    "status": "cancelling",
    "cancel_at": "2024-03-01",
    "cancelled_at": "2024-01-15T10:30:00Z"
  }
}
```

## Resume Subscription

Resume a cancelled subscription.

**Endpoint:** `POST /v1/payments/subscriptions/{subscription_id}/resume`

## Subscription Status

- `active`: Subscription is active
- `past_due`: Payment failed, retrying
- `cancelled`: Subscription cancelled
- `cancelling`: Will cancel at period end
- `expired`: Subscription expired

## Subscription History

Get payment history for a subscription.

**Endpoint:** `GET /v1/payments/subscriptions/{subscription_id}/payments`

**Response:**

```json
{
  "data": [
    {
      "id": "pay_1234567890",
      "amount": 99.00,
      "status": "succeeded",
      "payment_date": "2024-02-01",
      "created_at": "2024-02-01T10:00:00Z"
    }
  ]
}
```

