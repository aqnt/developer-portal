# Integrations API Overview

The Integrations API allows you to connect AQNT with third-party applications and services.

## Features

- **Webhooks**: Receive real-time event notifications
- **OAuth Integration**: Connect with OAuth providers
- **API Keys**: Manage integration API keys
- **Event Subscriptions**: Subscribe to specific events
- **Data Sync**: Sync data with external systems
- **Custom Integrations**: Build custom integrations

## Base Endpoint

```
https://api.aqnt.net/v1/integrations
```

## Quick Start

### Create Webhook

```bash
curl -X POST https://api.aqnt.net/v1/integrations/webhooks \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-app.com/webhook",
    "events": ["invoice.paid", "payment.succeeded"]
  }'
```

## Next Steps

- [Webhooks](/integrations/webhooks) - Set up webhooks
- [OAuth](/integrations/oauth) - OAuth integrations
- [Event Subscriptions](/integrations/events) - Subscribe to events

