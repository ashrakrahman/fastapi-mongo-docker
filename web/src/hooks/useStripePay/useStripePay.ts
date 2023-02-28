import { useState } from "react";
//import services from "../../services";
import { loadStripe } from "@stripe/stripe-js";

export default function useStripePay() {
  const [isFetchingStripeData, setIsFetchingStripeData] = useState(false);

  const handlePay = async () => {
    try {
      setIsFetchingStripeData(true);
      //const response = await services.stripePay();
      // const stripePromise = await loadStripe(response.checkout_public_key);
      // stripePromise?.redirectToCheckout({
      //   sessionId: response.checkout_session_id,
      // });
      // setIsFetchingStripeData(false);
      return Promise.resolve();
    } catch (error) {
      setIsFetchingStripeData(false);
      return Promise.reject();
    }
  };

  return {
    isFetchingStripeData,
    handlePay,
  };
}
