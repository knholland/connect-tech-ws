# API.AI Webhook - No SDK
The purpose of this example is to show you how use advanced webhook/business
logic without the use of the SDK. This could be helpful because it can show you
what the sdk is doing under the hood.

## To run this project:
1. Create a new [api.ai project](https://console.api.ai/) and upload the zip file to the project.
2. `cd actions-on-google-resources/code-examples/api.ai-webhook-no-sdk`
3. `nvm use`
4. `npm i`
6. In a terminal window `npm start`
7. In a second terminal window `../ngrok http 8080`
8. Add your ngrok generated https webhook to your api.ai's project in the
  fulfillment tab.(Ex: https://006a6cf5.ngrok.io/webhook)
9. On the integrations tab, select "Actions on Google" settings.
10. Click "Update Draft"
11. Click "Test"
12. You should see a green box added to the modal. Select "view." This should
  redirect you to the Actions on Google simulator.

_Note: This project is for demonstration purposes and is not intended for production use._

## APIs used:
- http://thecatapi.com/docs.html
- http://www.catfact.info
