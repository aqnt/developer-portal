# Personal Finance AI Insights

Get AI-powered financial insights and recommendations.

## Get Insights

Retrieve AI-generated financial insights.

**Endpoint:** `GET /v1/personal-finance/insights`

**Query Parameters:**

- `period` (string, optional): Time period (`week`, `month`, `year`)
- `type` (string, optional): Insight type (`spending`, `savings`, `budget`, `all`)

**Response:**

```json
{
  "data": {
    "insights": [
      {
        "type": "spending",
        "title": "Increased Dining Out Spending",
        "message": "Your dining out expenses increased by 25% this month compared to last month.",
        "severity": "warning",
        "recommendation": "Consider meal planning to reduce dining out costs.",
        "impact": "medium"
      },
      {
        "type": "savings",
        "title": "Savings Goal Progress",
        "message": "You're on track to reach your emergency fund goal by March 2024.",
        "severity": "info",
        "recommendation": "Continue current savings rate.",
        "impact": "positive"
      }
    ],
    "summary": {
      "total_insights": 5,
      "warnings": 2,
      "recommendations": 3
    }
  }
}
```

## Spending Analysis

Get detailed spending analysis with AI insights.

**Endpoint:** `GET /v1/personal-finance/insights/spending`

**Query Parameters:**

- `start_date` (string, optional): Start date
- `end_date` (string, optional): End date
- `compare_period` (string, optional): Compare to previous period

**Response:**

```json
{
  "data": {
    "period": "2024-01",
    "total_spending": 3500.00,
    "previous_period": 3200.00,
    "change_percentage": 9.4,
    "top_categories": [
      {
        "category": "Food & Dining",
        "amount": 800.00,
        "percentage": 22.9,
        "trend": "increasing"
      }
    ],
    "insights": [
      "Spending increased 9.4% compared to last month",
      "Food & Dining is your largest expense category",
      "Consider setting a budget for dining out"
    ],
    "anomalies": [
      {
        "date": "2024-01-10",
        "amount": 500.00,
        "description": "Unusual large purchase",
        "category": "Shopping"
      }
    ]
  }
}
```

## Savings Recommendations

Get AI-powered savings recommendations.

**Endpoint:** `GET /v1/personal-finance/insights/savings`

**Response:**

```json
{
  "data": {
    "current_savings_rate": 15,
    "recommended_rate": 20,
    "potential_monthly_savings": 250.00,
    "recommendations": [
      {
        "type": "reduce_expense",
        "category": "Entertainment",
        "current": 300.00,
        "recommended": 200.00,
        "potential_savings": 100.00
      },
      {
        "type": "optimize_subscription",
        "service": "Streaming Services",
        "current": 50.00,
        "recommended": 30.00,
        "potential_savings": 20.00
      }
    ]
  }
}
```

## Financial Health Score

Get your overall financial health score.

**Endpoint:** `GET /v1/personal-finance/insights/health-score`

**Response:**

```json
{
  "data": {
    "score": 75,
    "grade": "B",
    "factors": [
      {
        "factor": "Savings Rate",
        "score": 80,
        "weight": 0.3
      },
      {
        "factor": "Debt-to-Income Ratio",
        "score": 70,
        "weight": 0.25
      },
      {
        "factor": "Emergency Fund",
        "score": 65,
        "weight": 0.2
      },
      {
        "factor": "Budget Adherence",
        "score": 85,
        "weight": 0.15
      },
      {
        "factor": "Credit Score",
        "score": 75,
        "weight": 0.1
      }
    ],
    "recommendations": [
      "Build emergency fund to cover 6 months of expenses",
      "Reduce credit card utilization below 30%",
      "Increase savings rate to 20%"
    ]
  }
}
```

## Predictive Insights

Get predictive financial insights.

**Endpoint:** `GET /v1/personal-finance/insights/predictions`

**Response:**

```json
{
  "data": {
    "projected_month_end_balance": 5200.00,
    "projected_spending": 3500.00,
    "budget_status": "on_track",
    "warnings": [
      {
        "type": "potential_overspend",
        "category": "Entertainment",
        "projected": 250.00,
        "budget": 200.00,
        "date": "2024-01-25"
      }
    ],
    "opportunities": [
      {
        "type": "extra_savings",
        "message": "You're projected to have $200 extra this month",
        "recommendation": "Consider adding to emergency fund"
      }
    ]
  }
}
```

## Insight Types

- `spending`: Spending pattern insights
- `savings`: Savings recommendations
- `budget`: Budget adherence insights
- `goals`: Goal progress insights
- `anomalies`: Unusual transaction detection
- `opportunities`: Money-saving opportunities

## Insight Severity

- `info`: Informational insight
- `warning`: Warning that requires attention
- `critical`: Critical issue requiring immediate action
- `positive`: Positive financial behavior

