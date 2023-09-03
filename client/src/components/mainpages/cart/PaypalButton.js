// App.js
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import React from 'react';
// export default function App() {
//   return (
//     <PayPalScriptProvider
//       options={{
//         "client-id":
//           "AaXxoyP3B92k1UtzBcHXywN5UqGpEEXUnuxf8nAqN7Av4Uo1n7gARhwzI0l5eI0qEgH7rmisfZKBxrcn&disable-funding=credit",
       
//       }}
//     >
//       <PayPalButtons style={{ layout: "vertical" }} />
//     </PayPalScriptProvider>
//   );
// }

import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class PaypalButton extends React.Component {
  render() {
    const onSuccess = (payment) => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
      this.props.tranSuccess(payment);
    };

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "production"; // you can set here to 'production' for production
    let currency = "USD"; // or you can set this value from your props or state
    let total = this.props.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      // sandbox:
      //   "AbhtUivXE6feoMdyZRSDYbMm5tNmwivg5fS9EtZ05tANIKQAv7zVN3SkHWKCkj8P04pm9Ob-kk5O7U7A",
      production:
        "Ad7GGeYyQA-hMeQFSbcXc4triEKwU_JxuiU9cUUxQY9LV-Uig7M-EffQsAwA140LPFfdRc9rUbMy7Cly",
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    let style = {
      size: "medium",
      color: "blue",
      shape: "rect",
      label: "checkout",
      tagline: false,
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        style={style}
      />
    );
  }
}

// import { PayPalButton } from "react-paypal-button-v2";
// import   React  from "react";

// const Example = () => {

//     return (
//       <PayPalButton
//         amount="0.01"
//         // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
//         onSuccess={(details, data) => {
//           alert("Transaction completed by " + details.payer.name.given_name);

//           // OPTIONAL: Call your server to save the transaction
//           return fetch("/paypal-transaction-complete", {
//             method: "post",
//             body: JSON.stringify({
//               orderID: data.orderID
//             })
//           });
//         }}
//       />
//     );
//   }
// export default Example
