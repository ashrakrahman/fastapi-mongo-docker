import { useState } from "react";
//import services from "../../services";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default function useStripePay() {
  const [isFetchingStripeData, setIsFetchingStripeData] = useState(false);

  const handlePay = async (price: any) => {
    try {
      setIsFetchingStripeData(true);
      const data = {
        price: price,
      };
      const response = await axios.post(
        "http://localhost:8000/create-checkout-session",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const stripePromise = await loadStripe(response.data.checkout_public_key);
      stripePromise?.redirectToCheckout({
        sessionId: response.data.checkout_session_id,
      });
      setIsFetchingStripeData(false);
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
