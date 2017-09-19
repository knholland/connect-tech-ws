# Joke Bot
This will walk you through creating a Facebook Messenger bot with a webhook.
What you see here can be expanded/changed to be the basis for any bot.

We aren't using a NLP layer like api.ai for this example. If you want an
"intelligent" bot, see the bonus folder.

To do this lab, you will need to setup a test [Facebook Page](https://www.facebook.com/business/products/pages) and a [Facebook App](https://developers.facebook.com/apps/). This
can all be done using your Facebook account.

You will also need [ngrok](https://ngrok.com/).

## Part 1:
1. `npm install ngrok -g` (if needed)
2. `npm i`
3. Set env vars needed. (.ignore/env.sh)
    - `export APP_SECRET='<fb-app-secret>'`
        - available on Facebook App Dashboard
    - `export PAGE_ACCESS_TOKEN='<fb-pg-token>'`
        - available from "Messenger" in left gray menu
        - go to "Token Generation" + select page
    - `export VALIDATION_TOKEN='12345'`
4. `ngrok http 8080`
5. `npm start`
6. Copy the ngrok https endpoint from command line. (Ex: https://1c630d11.ngrok.io)
7. This should be used in your webhook setup for Facebook Messenger.
    - Webhook already set up?
        - Click "Webhooks" in left gray menu bar.
        - Click "Edit Subscription."
        - Callback URL should be `your ngrok endpt/webhook`
        - Verify Token should be what you picked. (Ex: 12345)

## Part 2:
Try adding additional events and/or templates. (See lib/templates for additional templates already available.)

## Part 3:
Try adding the new Built In NLP for Facebook Messenger from [Wit.ai](https://developers.facebook.com/docs/messenger-platform/built-in-nlp)
