# Joke Bot
This will walk you through creating an intelligent Facebook Messenger bot.
What you see here can be expanded/changed to be the basis for any bot.

This lab uses the new [Wit.ai](https://developers.facebook.com/docs/messenger-platform/built-in-nlp)
integration for Facebook Messenger bots.

To do this lab, you will need to setup:
1. a test [Facebook Page](https://www.facebook.com/business/products/pages)
2. [Facebook App](https://developers.facebook.com/apps/).
*This can all be done using your Facebook account.*
3.[ngrok](https://ngrok.com/)
4. a test project on wit.ai

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
7. Assuming you already did the joke-bot project AND ngrok is still running on
  your machine, all you would need to do is `npm start` this server.

  The only difference in your Facebook app setup would be to setup the "Built-In
  NLP":
  1. copy the server access token from your wit.ai project
  2. paste into facebook app "Built-In NLP"
  3. Toggle to "on"
  4. Select your Facebook test page in the drop down.

8. Check your logs! You should start to see an nlp object start to show in the
`app:app pageEntry in POST /webhook:` log.
9. Add entities to your wit.ai project, and they will automatically start to
show up in the requests to your server.
10. There's commented out code in lib/handlers/receivedMessage to give you an
idea of how to start using your nlp entities to make smarter responses for a
user.

## Part 2:
Try adding additional events and/or templates. (See lib/templates for additional templates already available.)
