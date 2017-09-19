# API.AI Webhook - Using Actions on Google SDK
The purpose of this example is to show you how to use advanced webhook/business
logic using Firebase + Api.ai with the Actions on Google SDK.

# Run this Action:
1. Download Firebase CLI `npm install -g firebase-tools`
2. `firebase login`
3. `cd connect-tech-ws/1+2/actions-on-google/code/api.ai-webhook-with-sdk`
4. `firebase init functions`
    - If needed, setup a new project when prompted.
    - Do not do a `npm i`.
    - Should see a functions dir, .firebaserc, firebase.json created.
6. `cd functions`
7. Change out index.js + package.json for one in root of this project in the
  "use-me" dir.
8. `npm i`
9. `firebase deploy --only functions`
10. Copy URL provided for webhook endpoint - Use this as fulfillment webhook for api.ai project.
11. Under the integrations tab, select settings for "Actions on Google"
12. Click "Update Draft" and then "Visit Console."

_Note: This project is for demonstration purposes and is not intended for production use._

## APIs used:
- http://thecatapi.com/docs.html
- http://www.catfact.info
