# Joke Bot
This will walk you through creating a really basic Facebook Messenger bot. What
you see here can be expanded/changed to be the basis for any bot not in need of
advanced logic.

To do this, you will need to setup a test [Facebook Page](https://www.facebook.com/business/products/pages) and a [Facebook App](https://developers.facebook.com/apps/). This
can all be done using your Facebook account.


## Part 1:
1. Upload the zip to a new api.ai project.
2. In the api.ai integrations tab, slide the "Facebook Messenger" toggle to on.
6. On your Facebook app, click "messenger" set up.
7. On you Facebook app, "messenger" tab, find "Token Generation."
7. Generate a token for your test page you want to use.
8. Copy the page access token from Facebook, and add it to the api.ai project
  Facebook Messenger integration.
9. Copy the "callback URL" from api.ai.
10. On your Facebook app, click "Setup Webhooks" under Webhooks.
11. On the api.ai Facebook Messenger integration, add any Verification Token
  you wish. (Ex: !1234!) Make sure to add it to the input for the "Verification Token."
12. Add the same Verification Token to your Facebook Messenger app's Webhook setup.
13. For the subscription checkboxes, just click "messages" for now.
14. IMPORTANT: You must click "start" on the api.ai integration prior to trying
  to verify the webhook on Facebook.
15. Click verify on the Facebook webhook setup.
16. Your bot is now running! You can head to Facebook Messenger and chat with
  your bot via your page.
17. Make changes as needed, and preview using Facebook Messenger.
18. If the bot stops working, double check steps 8-15.

## Part 2:
Customize it! Try adding templates, action buttons, etc.
