import React from "react";
import "./App.css";
import InSIteSmallCard from "./components/InSIteSmallCard/InSIteSmallCard";
import useStripePay from "./hooks/useStripePay/useStripePay";

function App() {
  //let { isFetchingStripeData, handlePay } = useStripePay();
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <InSIteSmallCard
          title={"Basic"}
          subTitle={"$399/month"}
          contentArray={["fdljfdjhf", "kjhfdjghfg"]}
          tag={false}
          type="regular"
          activeBtnFn={() => {}}
          isDisabled={false}
        />
        <InSIteSmallCard
          title={"Standard"}
          subTitle={"$599/month"}
          contentArray={["fdljfdjhf", "kjhfdjghfg"]}
          tag={false}
          type="regular"
          activeBtnFn={() => {}}
          isDisabled={false}
        />
      </div>
    </div>
  );
}

export default App;
