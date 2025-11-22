# Personal Finance API Overview

The Personal Finance API provides AI-powered personal finance management, budgeting, and financial insights.

## Features

- **Account Management**: Connect and manage bank accounts, credit cards, and investment accounts
- **Transaction Tracking**: Automatic transaction categorization and tracking
- **Budgeting**: Create and manage budgets with AI-powered recommendations
- **Financial Insights**: AI-driven insights and recommendations
- **Goal Tracking**: Set and track financial goals
- **Expense Analysis**: Analyze spending patterns and trends
- **Bill Reminders**: Automated bill payment reminders
- **Credit Score Monitoring**: Track credit score changes

## Base Endpoint

```
https://api.aqnt.net/v1/personal-finance
```

## Key Concepts

### Accounts

An account represents a financial account (bank, credit card, investment, etc.). Accounts can be:
- Manually added
- Connected via bank integration
- Synced automatically

### Transactions

Transactions represent money movements in accounts. They are:
- Automatically categorized using AI
- Tagged for easy filtering
- Linked to budgets and goals

### Budgets

Budgets help track spending against income. Features include:
- Category-based budgets
- Monthly, weekly, or custom periods
- AI-powered budget recommendations
- Spending alerts

## Quick Start

### Connect an Account

```bash
curl -X POST https://api.aqnt.net/v1/personal-finance/accounts \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "bank",
    "name": "Checking Account",
    "institution": "Chase",
    "account_number": "****1234"
  }'
```

## Common Use Cases

1. **Track Spending**: Monitor transactions across all accounts
2. **Create Budgets**: Set spending limits and track progress
3. **Financial Goals**: Set and track savings goals
4. **Get Insights**: Receive AI-powered financial recommendations
5. **Bill Management**: Track and pay bills

## Next Steps

- [Accounts](/personal-finance/accounts) - Manage financial accounts
- [Transactions](/personal-finance/transactions) - Track transactions
- [Budgeting](/personal-finance/budgeting) - Create and manage budgets
- [AI Insights](/personal-finance/ai-insights) - Get AI-powered recommendations

